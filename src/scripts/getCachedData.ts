interface SavedTextJSON {
    title: string;
    text: string;
}

export const getCachedData = () => {
    const titlefield: HTMLTextAreaElement = document.getElementById('titlefield') as HTMLTextAreaElement;
    const textfield: HTMLTextAreaElement = document.getElementById('textfield') as HTMLTextAreaElement;

    const data: SavedTextJSON = JSON.parse(window.localStorage.getItem('savedtext')!)

    if (data) {
        titlefield.value = data.title;
        textfield.value = data.text;
    }
}