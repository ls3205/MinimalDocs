export const clearText = () => {
    const textfield = document.getElementById("textfield") as HTMLTextAreaElement;
    const titlefield = document.getElementById("titlefield") as HTMLTextAreaElement;
    textfield.value.length != 0 ? (textfield.value = "") : (titlefield.value = "");
};