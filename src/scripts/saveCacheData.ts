export const saveCacheData = () => {
    // const textAreaCache: Cache = await caches.open('cachedtextdata')

    // const titlefield: HTMLTextAreaElement = document.getElementById('titlefield') as HTMLTextAreaElement
    // const textfield: HTMLTextAreaElement = document.getElementById('textfield') as HTMLTextAreaElement

    // const title: string = titlefield.value ?? `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`
    // const text: string = textfield.value

    // console.log('bruh')

    // textAreaCache.put('/title.txt', new Response(title))
    // textAreaCache.put('/text.txt', new Response(text))

    const titlefield: HTMLTextAreaElement = document.getElementById('titlefield') as HTMLTextAreaElement
    const textfield: HTMLTextAreaElement = document.getElementById('textfield') as HTMLTextAreaElement

    caches.open('minimaldocs')
        .then((cache) => {
            const title: string = titlefield.value ?? `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`
            const text: string = textfield.value
            const json = `{"title": "${title}", "text": "${text}"}`
            cache.put('/cached.json', new Response(json))
        })
}