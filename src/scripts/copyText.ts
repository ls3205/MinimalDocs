export const copyText = () => {
    const textfield: HTMLTextAreaElement = document.getElementById("textfield") as HTMLTextAreaElement;
    textfield.select();
    document.execCommand("copy");
};