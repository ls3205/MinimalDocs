const fs = require("fs");

const Themes = JSON.parse(fs.readFileSync('./src/themes/themes.json'));

const generator = (name: string, themeJSON: any): string => {
    var tempCSSString = `.theme-${name} {`;
    Object.entries(themeJSON).map(([key, value]) => {
        tempCSSString += `\n    ${key}: ${value};`;
    })
    tempCSSString += '\n}\n\n';
    return tempCSSString;
}

const generate = (): void => {
    var cssString: string = '';
    Object.entries(Themes).map(([key, value]) => {
        cssString += generator(key, value);
        
    })
    fs.writeFile(`./src/themes/themes.css`, cssString, (err: any) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
        }
    })
}

generate()