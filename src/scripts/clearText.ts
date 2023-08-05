export const clearText = () => {
    const textfield: HTMLTextAreaElement = document.getElementById("textfield") as HTMLTextAreaElement;
    const titlefield: HTMLTextAreaElement = document.getElementById("titlefield") as HTMLTextAreaElement;
    textfield.value.length != 0 ? (textfield.value = "") : (titlefield.value = "");
};