import { checkSaved } from "./checkSaved"

export const saveCacheData = () => {

    const titlefield: HTMLTextAreaElement = document.getElementById('titlefield') as HTMLTextAreaElement
    const textfield: HTMLTextAreaElement = document.getElementById('textfield') as HTMLTextAreaElement

    const title: string = titlefield.value
    const text: string = textfield.value

    const jsonData = {
        "title": title,
        "text": text
    }

    window.localStorage.setItem('savedtext', JSON.stringify(jsonData))

    checkSaved()
}