import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    try {
        const session = await getAuthSession();

        if (!session?.user) {
            return NextResponse.json('Unauthorized', { status: 401 })
        }

        const id = new URL(req.url).searchParams.get("id")

        if (!id) {
            return NextResponse.json('No doc id', {status: 400})
        }

        await db.doc.delete({
            where: {
                id: id,
                creatorId: session.user.id
            }
        })

        return NextResponse.json(`Deleted Doc: ID ${id}`, {status: 200})
    } catch (err) {
        return NextResponse.json(`Could not delete doc: ${err}`, { status: 500 })
    }
}