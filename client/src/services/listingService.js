// const { REACT_APP_CRAFTITIES_API } = process.env;
const api = process.env.REACT_APP_CRAFTITIES_API;

// CRUD
export const getOnePopulated = (listingId) => {
    return fetch(`${api}/data/listing/${listingId}/details`)
        .then(res => res.json());
}

export const addItem = (postData) => {
    let token = JSON.parse(localStorage.getItem('AUTH_TOKEN'));

    return fetch(`${api}/data/listing/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'user-authorization': token.token,
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json());
}

export const updateItem = (listingId, listingData) => {
    let token = JSON.parse(localStorage.getItem('AUTH_TOKEN'));

    return fetch(`${api}/data/listing/${listingId}/edit`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'user-authorization': token.token,
        },
        body: JSON.stringify(listingData)
    })
        .then(res => res.json())
}

export const deleteListing = (listingId) => {
    let token = JSON.parse(localStorage.getItem('AUTH_TOKEN'));

    return fetch(`${api}/data/listing/${listingId}/delete`, {
        method: 'DELETE',
        headers: {
            'user-authorization': token.token,
        }
    })
        .then(res => res.json());
}

export const getAllListings = () => {
    return fetch(`${api}/data/listing/all`)
        .then(res => res.json());
}

// ==================

export const addToFavourites = (listingId) => {
    let token = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
    return fetch(`${api}/data/listing/${listingId}/add-to-favoutites`, {
        method: 'GET',
        headers: {
            'user-authorization': token.token,
        }
    })
        .then(res => res.json());
}

export const addNewComment = (listingId, comment) => {
    let token = localStorage.getItem('AUTH_TOKEN');
    token = JSON.parse(token);

    return fetch(`${api}/data/listing/${listingId}/comments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'user-authorization': token.token,
        },
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
}

export const listingComments = (listingId) => {
    console.log(listingId);
    return fetch(`${api}/data/listing/${listingId}/comments`)
        .then(res => res.json());
}


// ==================

export const category = (category) => {
    return fetch(`${api}/data/collection/${category}`)
        .then(res => res.json());
}

export const topFour = async () => {
    return await fetch(`${api}/data/collection/top`);
}





