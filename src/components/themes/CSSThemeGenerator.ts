const fs = require("fs");

const Themes = JSON.parse(fs.readFileSync('./src/components/themes/themes.json'));

const generator = (name: string, themeJSON): string => {
    var tempCSSString = `.theme-${name} {`;
    Object.entries(themeJSON).map(([key, value]) => {
        tempCSSString += `\n    ${key}: ${value};`;
    })
    tempCSSString += '\n}';
    return tempCSSString;
}

const generate = (): void => {
    Object.entries(Themes).map(([key, value]) => {
        const cssString = generator(key, value);
        fs.writeFile(`./src/components/themes/${key}.css`, cssString, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        })
    })
}

generate()