const fs = require('fs')

export async function GET(req: Request) {
    try {
        //@ts-ignore
        const theme = req.nextUrl.searchParams.get(['theme'])

        const themes = JSON.parse(fs.readFileSync('./src/themes/themes.json'));
        var res;
        if (theme) {
            res = themes[theme];
        } else {
            res = themes
        }
        return new Response(JSON.stringify(res))
    } catch (err) {
        console.error(err)
    }
}