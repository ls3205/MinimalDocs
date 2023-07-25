export const clearText = () => {
    const textfield = document.getElementById("textfield");
    const titlefield = document.getElementById("titlefield");
    textfield.value.length != 0 ? (textfield.value = "") : (titlefield.value = "");
};