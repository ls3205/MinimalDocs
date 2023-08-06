export const checkSaved = () => {
    const cachedData = JSON.parse(window.localStorage.getItem('savedtext')!);

    const titlefield: HTMLTextAreaElement = document.getElementById('titlefield') as HTMLTextAreaElement
    const textfield: HTMLTextAreaElement = document.getElementById('textfield') as HTMLTextAreaElement

    const title: string = titlefield.value
    const text: string = textfield.value

    if ((cachedData.title !== title) || (cachedData.text !== text)) {
        throw new Error("Failed to Save")
    }
}