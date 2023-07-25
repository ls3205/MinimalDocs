export const uploadFile = () => {
    const file = document.getElementById("upload").files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
        const textfield = document.getElementById("textfield");
        const titlefield = document.getElementById("titlefield");
        textfield.value = e.target.result;
        titlefield.value = file.name.split(".txt")[0];
    };

    reader.readAsText(file);
};