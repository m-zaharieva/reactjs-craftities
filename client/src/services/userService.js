
export const registerUser = (userData) => {
    return fetch('/auth/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(res => res.json());
}

export const loginUser = (userData) => {
    return fetch('/auth/login', {
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
    
    
    return fetch('/auth/logout', {
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

    return fetch(`/user/${userId}`, {
        method: 'GET', 
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => res.json());
}


export const sessionDataHandler = (token, userId) => {
    localStorage.setItem('AUTH_TOKEN', token);
    localStorage.setItem('userId', userId);
}

export const getUser = () => {
    return localStorage.getItem('user');
}

export const userListings = () => {
    let token = localStorage.getItem('AUTH_TOKEN');
    
    return fetch('/data/collection/my-listings', {
        method: 'GET',
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => res.json());
}

export const userFavourites = () => {
    let token = localStorage.getItem('AUTH_TOKEN');
    return fetch('/data/collection/favourites', {
        method: 'GET',
        headers: {
            'user-authorization': token,
        }
    })
    .then(res => res.json());
}