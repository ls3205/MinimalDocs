export const downloadFile = () => {
    const textfield: HTMLTextAreaElement = document.getElementById("textfield") as HTMLTextAreaElement
    const textContent: string = textfield.value;
    const titlefield: HTMLTextAreaElement = document.getElementById("titlefield") as HTMLTextAreaElement
    const titleContent: string = titlefield.value;

    if (textContent.length > 0) {
        const downloadableLink: HTMLAnchorElement = document.createElement("a");
        downloadableLink.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," +
                encodeURIComponent(textContent)
        );
        const name: string =
            titleContent.length > 0
                ? titleContent
                : `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}.txt`;
        downloadableLink.download = name;
        document.body.appendChild(downloadableLink);
        downloadableLink.click();
        document.body.removeChild(downloadableLink);
    }
};