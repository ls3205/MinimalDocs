import { NextRequest, NextResponse } from "next/server";
import path from "path";

const fs = require('fs')

export async function GET(req: NextRequest) {
    try {
        const theme = new URL(req.url).searchParams.get("theme")
        const dir = path.resolve('./src/themes', 'themes.json')
        const themes = JSON.parse(fs.readFileSync(dir));
        var res;
        if (theme) {
            res = themes[theme]
        } else {
            res = themes
        }

        return NextResponse.json(res, {status: 200})
    } catch (err) {
        if (err instanceof TypeError) {
            return NextResponse.json({error: `Theme does not exist`}, {status: 400})
        }
        return NextResponse.json({error: `An Error Occurred Fetching Themes: ${err}`}, {status: 500})
    }
}