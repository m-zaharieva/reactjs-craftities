import jwt from 'jsonwebtoken';


export const sign = (payload, secret) => {
    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, (err, token) => {
            if (err) {
                reject(err)
            } else {
                resolve(token)
            }
        });
    });

    return promise;
}

export const verify = (token, secret) => {
    let promise = new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                reject(err)
            } else {
                resolve(decodedToken)
            }
        });
    });

    return promise;
}