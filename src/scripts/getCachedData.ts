export const getCachedData = () => {
    const titlefield: HTMLTextAreaElement = document.getElementById('titlefield') as HTMLTextAreaElement;
    const textfield: HTMLTextAreaElement = document.getElementById('textfield') as HTMLTextAreaElement;

    const getData = (cache: Cache) => {
        cache.match('/cached.json')
            .then((res) => {
                const reader = res!.body!.getReader();
                reader.read()
                    .then(({value}) => {
                        const decodedString = (new TextDecoder().decode(value))
                        const cacheJSON = JSON.parse(decodedString)
                        
                        titlefield.value = cacheJSON.title;
                        textfield.value = cacheJSON.text;
                    }).catch(err => {
                        console.log(err)
                    })
            })
    }

    caches.open('minimaldocs')
        .then((cache) => {
            getData(cache);
        })
}