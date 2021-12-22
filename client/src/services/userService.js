// const { REACT_APP_CRAFTITIES_API } = process.env;
const api = process.env.REACT_APP_CRAFTITIES_API;



export const registerUser = (userData) => {
    return fetch(`${api}/auth/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(res => res.json());
}

export const loginUser = (userData) => {
    return fetch(`${api}/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(res => res.json());
};



export const logout = (token) => {

    return fetch(`${api}/auth/logout`, {
        method: 'GET', 
        headers: {
            'user-authorization': token.token,
        }
    })
    .then(res => {
        localStorage.clear();
        res.json()});
    };
    
export const userProfile = (token) => {
    let user = JSON.parse(localStorage.getItem('user'));

    return fetch(`${api}/user/${user._id}`, {
        method: 'GET', 
        headers: {
            'user-authorization': token.token,
        }
    })
    .then(res => res.json())
}

export const getUser = () => {
    return localStorage.getItem('user');
}

// export const userProfileView = (personId, token) => {

//     return fetch(`${api}/user/${personId}`, {
//         method: 'GET',
//         headers: {
//             'user-authorization': token.token,
//         }
//     })
//     .then(res => res.json());
// }

export const userListings = () => {
    let token = localStorage.getItem('AUTH_TOKEN');
    token = JSON.parse(token);

    return fetch(`${api}/data/collection/my-listings`, {
        method: 'GET',
        headers: {
            'user-authorization': token.token,
        }
    })
    .then(res => res.json());
}

export const userFavourites = () => {
    let token = JSON.parse(localStorage.getItem('AUTH_TOKEN'));

    return fetch(`${api}/data/collection/favourites`, {
        method: 'GET',
        headers: {
            'user-authorization': token.token,
        }
    })
    .then(res => res.json());
}

export const sessionDataHandler = async (token, userId) => {
    await localStorage.setItem('AUTH_TOKEN', token);
    await localStorage.setItem('userId', userId);
}

export const addDescription = (userId, description, token) => {
    return fetch(`${api}/user/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'user-authorization': token.token,
        },
        body: JSON.stringify({description})
    })
    .then(res => res.json());
}