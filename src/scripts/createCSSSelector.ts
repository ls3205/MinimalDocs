export const createCSSSelector = (selector:string, style:string) => {
    if (!document.styleSheets) return;
    if (document.getElementsByTagName("head").length == 0) return;

    var styleSheet, mediaType;

    if (document.styleSheets.length > 0) {
        for (var i = 0, l = document.styleSheets.length; i < l; i++) {
            if (document.styleSheets[i].disabled) continue;
            var media = document.styleSheets[i].media;
            mediaType = typeof media;

            if (mediaType === "string") {
                //@ts-ignore
                if (media === "" || media.indexOf("screen") !== -1) {
                    styleSheet = document.styleSheets[i];
                }
            } else if (mediaType == "object") {
                if (
                    media.mediaText === "" ||
                    media.mediaText.indexOf("screen") !== -1
                ) {
                    styleSheet = document.styleSheets[i];
                }
            }

            if (typeof styleSheet !== "undefined") break;
        }
    }

    if (typeof styleSheet === "undefined") {
        var styleSheetElement = document.createElement("style");
        styleSheetElement.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(styleSheetElement);

        for (i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].disabled) {
                continue;
            }
            styleSheet = document.styleSheets[i];
        }

        mediaType = typeof styleSheet!.media;
    }

    if (mediaType === "string") {
        for (var i = 0, l = styleSheet!.rules.length as number; i < l; i++) {
            if (
                //@ts-ignore
                styleSheet!.rules[i].selectorText && styleSheet!.rules[i].selectorText.toLowerCase() ==
                    selector.toLowerCase()
            ) {
                //@ts-ignore
                styleSheet!.rules[i].style.cssText = style;
                return;
            }
        }
        styleSheet!.addRule(selector, style);
    } else if (mediaType === "object") {
        var styleSheetLength = styleSheet!.cssRules
            ? styleSheet!.cssRules.length
            : 0;
        for (var i = 0; i < styleSheetLength; i++) {
            if (
                //@ts-ignore
                styleSheet!.cssRules[i].selectorText && styleSheet!.cssRules[i].selectorText.toLowerCase() ==
                    selector.toLowerCase()
            ) {
                //@ts-ignore
                styleSheet!.cssRules[i].style.cssText = style;
                return;
            }
        }
        styleSheet!.insertRule(selector + "{" + style + "}", styleSheetLength);
    }
};