import * as jwt from '../helpers/jwt.js';
import { TOKEN_SECRET } from '../config/constants.js';

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


export const sessionDataHandler = (token) => {
    localStorage.setItem('AUTH_TOKEN', token);
    jwt.verify(token, TOKEN_SECRET)
        .then(data => {
            localStorage.setItem('user', {...data});
        })
}