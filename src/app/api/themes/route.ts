const fs = require('fs')

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const theme = searchParams.get('theme')

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