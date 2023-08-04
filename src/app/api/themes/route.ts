const fs = require('fs')

export async function GET(req: Request) {
    try {
        const themes = JSON.parse(fs.readFileSync('./src/components/themes/themes.json'));
        return new Response(JSON.stringify(themes))
    } catch (err) {
        console.error(err)
    }
}