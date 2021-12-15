function save() {
  var textcontent = document.querySelector("textarea").value;

  if (textcontent.length > 0) {
    var downloadableLink = document.createElement("a");
    downloadableLink.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(textcontent)
    );
    var name = `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}.txt`;
    downloadableLink.download = name;
    document.body.appendChild(downloadableLink);
    downloadableLink.click();
    document.body.removeChild(downloadableLink);
  }
}
