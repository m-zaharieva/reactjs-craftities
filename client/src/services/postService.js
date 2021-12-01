export const allPosts = () => {
    return fetch('/post/catalog')
        .then(res => res.json());
}

export const topItems = async () => {
    return await fetch('/post/topItems');
}

export const addItem = (postData) => {
    return fetch('/post/create', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json());
} 