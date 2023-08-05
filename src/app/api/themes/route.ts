import { NextRequest, NextResponse } from "next/server";

const fs = require('fs')

export async function GET(req: NextRequest) {
    try {
        const theme = new URL(req.url).searchParams.get("theme")
        const themes = JSON.parse(fs.readFileSync('./src/themes/themes.json'));
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
        return NextResponse.json({error: `An Error Occured Fetching Themes: ${err}`}, {status: 500})
    }
}