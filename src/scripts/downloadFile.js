export const downloadFile = () => {
    const textContent = document.getElementById("textfield").value;
    const titleContent = document.getElementById("titlefield").value;

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