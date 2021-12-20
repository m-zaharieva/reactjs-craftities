const { REACT_APP_CRAFTITIES_API } = process.env;

// CRUD
export const getOnePopulated = (listingId) => {
    return fetch(`${REACT_APP_CRAFTITIES_API}/data/listing/${listingId}/details`)
        .then(res => res.json());
}

export const addItem = (postData) => {
    let token = localStorage.getItem('AUTH_TOKEN');

    return fetch(`${REACT_APP_CRAFTITIES_API}/data/listing/create`, {
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

    return fetch(`${REACT_APP_CRAFTITIES_API}/data/listing/${listingId}/edit`, {
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

    return fetch(`${REACT_APP_CRAFTITIES_API}/data/listing/${listingId}/delete`, {
        method: 'DELETE',
        headers: {
            'user-authorization': token,
        }
    })
        .then(res => res.json());
}



// ==================

export const addToFavourites = (listingId) => {
    let token = localStorage.getItem('AUTH_TOKEN');
    return fetch(`${REACT_APP_CRAFTITIES_API}/data/listing/${listingId}/add-to-favoutites`, {
        method: 'GET',
        headers: {
            'user-authorization': token,
        }
    })
        .then(res => res.json());
}

export const addNewComment = (listingId, comment) => {
    let token = localStorage.getItem('AUTH_TOKEN');

    return fetch(`${REACT_APP_CRAFTITIES_API}/data/listing/${listingId}/comments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'user-authorization': token,
        },
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
}

export const listingComments = (listingId) => {
    console.log(listingId);
    return fetch(`${REACT_APP_CRAFTITIES_API}/data/listing/${listingId}/comments`)
        .then(res => res.json());
}


// ==================

export const category = (category) => {
    return fetch(`${REACT_APP_CRAFTITIES_API}/data/collection/${category}`)
        .then(res => res.json());
}

export const topFour = async () => {
    return await fetch(`${REACT_APP_CRAFTITIES_API}/data/collection/top`);
}





