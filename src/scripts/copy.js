function copyText() {
    var textarea = document.querySelector('textarea');
    textarea.select();
    document.execCommand('copy');
}