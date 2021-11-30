
export const registerUser = (userData) => {      
    return fetch('/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(res => res.json());
}

export const loginUser = (userData) => {
    return fetch('/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(res => res.json());
};

export const sessionDataHandler = (token, userId) => {
    localStorage.setItem('AUTH_TOKEN', token);
    localStorage.setItem('userId', userId);
}

export const getUser = () => {
    return localStorage.getItem('user');
}