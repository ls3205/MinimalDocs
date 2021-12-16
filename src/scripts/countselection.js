function countSelection() {
    var textarea = document.querySelector('textarea');
    var selection = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

    if (selection.length == 0) {
        var wordCountSpan = document.getElementById('wordCountNum');
        wordCountSpan.innerHTML = '0';
        return 0;
    }

    var words = selection.split(/\s+/);
    var wordCount = words.length;

    var wordCountSpan = document.getElementById('wordCountNum');
    wordCountSpan.innerHTML = wordCount;
}
