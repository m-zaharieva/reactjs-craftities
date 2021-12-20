const { REACT_APP_CRAFTITIES_API } = process.env;

export const registerUser = (userData) => {
    return fetch(`${REACT_APP_CRAFTITIES_API}/auth/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(res => res.json());
}

export const loginUser = (userData) => {
    return fetch(`${REACT_APP_CRAFTITIES_API}/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(res => res.json());
};

export const logout = () => {
    let token = localStorage.getItem('AUTH_TOKEN');
    
    
    return fetch(`${REACT_APP_CRAFTITIES_API}/auth/logout`, {
        method: 'GET', 
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => {
        localStorage.clear();
        res.json()});
    };
    
    
export const userProfile = () => {
    let token = localStorage.getItem('AUTH_TOKEN');
    let userId = localStorage.getItem('userId');

    return fetch(`${REACT_APP_CRAFTITIES_API}/user/${userId}`, {
        method: 'GET', 
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => res.json());
}

export const getUser = () => {
    return localStorage.getItem('user');
}

export const userListings = () => {
    let token = localStorage.getItem('AUTH_TOKEN');
    
    return fetch(`${REACT_APP_CRAFTITIES_API}/data/collection/my-listings`, {
        method: 'GET',
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => res.json());
}

export const userFavourites = () => {
    let token = localStorage.getItem('AUTH_TOKEN');
    return fetch(`${REACT_APP_CRAFTITIES_API}/data/collection/favourites`, {
        method: 'GET',
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => res.json());
}



export const sessionDataHandler = async (token, userId) => {
    await localStorage.setItem('AUTH_TOKEN', token);
    await localStorage.setItem('userId', userId);
}