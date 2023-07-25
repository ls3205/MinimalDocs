export const uploadFile = () => {
    const upload = document.getElementById("upload") as HTMLInputElement;
    const file:File = upload.files![0];

    const reader = new FileReader();
    reader.onload = (e) => {
        const textfield = document.getElementById("textfield") as HTMLTextAreaElement;
        const titlefield = document.getElementById("titlefield") as HTMLTextAreaElement;
        textfield.value = e.target?.result as string;
        titlefield.value = file.name.split(".txt")[0];
    };

    reader.readAsText(file);
};