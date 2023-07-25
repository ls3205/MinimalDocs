export const copyText = () => {
    const textfield = document.getElementById("textfield");
    textfield.select();
    document.execCommand("copy");
};
