function clearText() {
    textarea = document.querySelector("textarea");

    if (textarea.value.length > 0) {
        textarea.value = "";
    }
}