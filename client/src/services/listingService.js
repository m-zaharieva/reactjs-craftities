
export const getOnePopulated = (listingId) => {
    return fetch(`/post/${listingId}/details`)
        .then(res => res.json());
}

export const allPosts = () => {
    return fetch('/post/catalog')
        .then(res => res.json());
}

export const listingsForCategory = (category) => {
    return fetch(`/post/${category}`)
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

export const updateItem = (listingId, listingData) => {
    let token = localStorage.getItem('AUTH_TOKEN');

    return fetch(`/post/${listingId}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(listingData)
    })
    .then(res => res.json())
}

export const deleteListing = (listingId) => {
    let token = localStorage.getItem('AUTH_TOKEN');
    
    return fetch(`/post/${listingId}/delete`, {
        method: 'DELETE', 
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => res.json());
}


export const userListings = () => {
    let token = localStorage.getItem('AUTH_TOKEN');
    return fetch('/post/my-listings', {
        method: 'GET',
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => res.json());
}