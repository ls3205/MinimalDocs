import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
    try {
        const session = await getAuthSession();

        if (!session?.user) {
            return NextResponse.json('Unauthorized', { status: 401 })
        }

        const id = new URL(req.url).searchParams.get("id")

        if (!id) {
            const docs = await db.doc.findMany({
                where: {
                    creatorId: session.user.id
                }
            })

            return NextResponse.json(docs, { status: 200 })
        }

        const doc = await db.doc.findFirst({
            where: {
                id: id,
                creatorId: session.user.id
            }
        })

        return NextResponse.json({title: doc?.title, content: doc?.content}, { status: 200 })
    } catch (err) {
        return NextResponse.json(`Could not retrieve doc: ${err}`, { status: 500 })
    }
}