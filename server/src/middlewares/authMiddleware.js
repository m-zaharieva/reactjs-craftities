import * as jwt from "./../helpers/jwtHelper.js";
import { TOKEN_SECRET } from './../config/constants.js';

export const authMiddleware = (req, res, next) => {
    let userToken = req.headers['x-authorization'];
    console.log(userToken);

    jwt.verify(userToken, TOKEN_SECRET)
        .then(decodedToken => {
            if(decodedToken) {
                console.log(decodedToken);
                next();
            } else {
                res.status(403).json(JSON.stringify({"error": 'Your session token has expired. Please login to your account and try again.'}))
            }
        })
        .catch(err => {
            res.status(403).json(JSON.stringify({"error": 'Your session token has expired. Please login to your account and try again.'}));
        })
}