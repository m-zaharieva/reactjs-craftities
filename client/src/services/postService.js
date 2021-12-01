export const allPosts = () => {
    return fetch('/api/post/catalog')
        .then(res => res.json());
}

export const topItems = async () => {
    return await fetch('/api/post/topItems');
}

export const addItem = (postData) => {
    return fetch('/api/post/create', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json());
} 