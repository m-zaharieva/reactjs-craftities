export const register = (e) => {
    let data = {
        firstName: 'Miroslava',
        lastName: 'Zaharieva',
        email: 'miroslava.zaharieva@gmail.com',
        password: 'asdasdasd',
    }
    
    return fetch('/user/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
        
    })
    .then(res => res.json());
}


