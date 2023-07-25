export const copyText = () => {
    const textfield = document.getElementById("textfield") as HTMLTextAreaElement;
    textfield.select();
    document.execCommand("copy");
};