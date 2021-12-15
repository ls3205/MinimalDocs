function indent() {
    const textarea = document.querySelector("textarea");

    textarea.addEventListener("keydown", (e) => {
        if (e.keyCode === 9) {
            e.preventDefault();

            textarea.setRangeText(
                "\t",
                textarea.selectionStart,
                textarea.selectionEnd,
                "end"
            )
        }
    });
}
