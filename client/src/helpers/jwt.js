import jwt from 'jsonwebtoken';

export const verify = (token, secret) => {
    let promise = new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                reject(err);
            } else {
                resolve(decodedToken);
            }
        });
    });
    return promise;
}


