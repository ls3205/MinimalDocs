import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { DocUpdateValidator } from "@/lib/validators/doc";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
    try {
        const session = await getAuthSession();

        if (!session?.user) {
            return NextResponse.json('Unauthorized', { status: 401 })
        }

        const body = await req.json()
        const { id, title, content } = DocUpdateValidator.parse(body)

        await db.doc.update({
            where: {
                id: id,
                creatorId: session.user.id
            },
            data: {
                title: title,
                content: content
            }
        })

        return NextResponse.json('Updated', {status: 200})
    } catch (err) {
        return NextResponse.json(`Could not update doc: ${err}`, { status: 500 })
    }
}