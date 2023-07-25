export const downloadFile = () => {
    const textfield = document.getElementById("textfield") as HTMLTextAreaElement
    const textContent = textfield.value;
    const titlefield = document.getElementById("titlefield") as HTMLTextAreaElement
    const titleContent = titlefield.value;

    if (textContent.length > 0) {
        const downloadableLink = document.createElement("a");
        downloadableLink.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," +
                encodeURIComponent(textContent)
        );
        const name =
            titleContent.length > 0
                ? titleContent
                : `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}.txt`;
        downloadableLink.download = name;
        document.body.appendChild(downloadableLink);
        downloadableLink.click();
        document.body.removeChild(downloadableLink);
    }
};