export const saveCacheData = () => {
    const titlefield: HTMLTextAreaElement = document.getElementById('titlefield') as HTMLTextAreaElement
    const textfield: HTMLTextAreaElement = document.getElementById('textfield') as HTMLTextAreaElement

    const title: string = titlefield.value ?? `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`
    const text: string = textfield.value

    const jsonData = {
        "title": title,
        "text": text
    }

    window.localStorage.setItem('savedtext', JSON.stringify(jsonData))
}