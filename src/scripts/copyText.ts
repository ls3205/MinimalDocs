export const copyText = () => {
    const textfield: HTMLTextAreaElement = document.getElementById("textfield") as HTMLTextAreaElement;
    textfield.select();
    document.execCommand("copy");

    return textfield.value.length < 20 ? textfield.value.slice(0, 20) : `${textfield.value.slice(0, 20)}...`;
};