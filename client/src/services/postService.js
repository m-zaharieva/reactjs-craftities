
export const getOnePopulated = (postId) => {
    return fetch(`/post/${postId}`)
        .then(res => res.json());
}

export const allPosts = () => {
    return fetch('/post/catalog')
        .then(res => res.json());
}

export const topItems = async () => {
    return await fetch('/post/topItems');
}

export const addItem = (postData) => {
    let token = localStorage.getItem('AUTH_TOKEN');
    
    return fetch('/post/create', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json());
} 