export const getDocData = () => {
    var wordCount: number;
    var selectionWordCount: number;
    var characterCount: number;
    var selectionCharacterCount: number;
    var charactersExclSpaceCount: number;
    var selectionCharactersExclSpaceCount: number;

    const textfield = document.getElementById('textfield') as HTMLTextAreaElement;

    const selection = textfield.value.substring(textfield.selectionStart, textfield.selectionEnd);

    if (selection.length == 0) {
        selectionWordCount = 0;
        selectionCharacterCount = 0;
        selectionCharactersExclSpaceCount = 0;
    } else {
        let res = [];
        let selStr = selection
            .replace(/[\t\n\r\.\?\!]/gm, " ")
            .split(" ");
        selStr.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
                res.push(trimStr);
            }
        });

        selectionWordCount = res.length

        let selStr2 = selection
            .replace(/[\t\n\r]/gm, " ");
        selectionCharacterCount = selStr2.length

        let selStr3 = selection
            .replace(/[\t\n\r]/gm, "");
        selectionCharactersExclSpaceCount = selStr3.length
    }

    let res = [];
    let str = textfield.value
        .replace(/[\t\n\r\.\?\!]/gm, " ")
        .split(" ");
    str.map((s) => {
        let trimStr = s.trim();
        if (trimStr.length > 0) {
            res.push(trimStr);
        }
    });

    wordCount = res.length;

    let str2 = textfield.value
        .replace(/[\t\n\r]/gm, " ");
    characterCount = str2.length

    let str3 = textfield.value
        .replace(/[\t\n\r]/gm, "");
    charactersExclSpaceCount = str3.length

    return {
        wordCount,
        selectionWordCount,
        characterCount,
        selectionCharacterCount,
        charactersExclSpaceCount,
        selectionCharactersExclSpaceCount
    }
}