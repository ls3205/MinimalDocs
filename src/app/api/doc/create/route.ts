import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { DocCreateValidator } from "@/lib/validators/doc";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
    try {
        const session = await getAuthSession();

        if (!session?.user) {
            return NextResponse.json('Unauthorized', { status: 401 })
        }

        const body = await req.json()
        const { title, content } = DocCreateValidator.parse(body)

        const doc = await db.doc.create({
            data: {
                title: title,
                content: content,
                creatorId: session.user.id
            }
        })

        return NextResponse.json(doc.id, { status: 200 })
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json(err.message, { status: 422 })
        }

        return NextResponse.json(`Could not create new doc: ${err}`, { status: 500 })
    }
}