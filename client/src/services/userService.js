export const registerFormHandler = (e) => {
    e.preventDefault();
    let data = {
        firstName: 'Miroslava',
        lastName: 'Zaharieva',
        email: 'miroslava.zaharieva@gmail.com',
        password: 'asdasdasd',
        rePassword: 'asdasdasd',
    }
    
    return fetch('/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
        
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        // TODO Error handler
        console.log(err);
    });
}


export const loginFormHandler = (e) => {
    e.preventDefault();
    
};