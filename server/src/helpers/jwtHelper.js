import jwt, { decode } from 'jsonwebtoken';


export const sign = (payload, secret) => {
    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, {expiresIn: '1h'}, (err, token) => {
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
            let {exp} = decode(token);
            if (err) {
                reject(err)
            } else if (Date.now() >= exp * 1000) {
                reject(err)
            } else {
                resolve(decodedToken)
            }
        });
    });

    return promise;
}