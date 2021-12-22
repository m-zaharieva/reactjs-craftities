import * as jwt from "./../helpers/jwtHelper.js";
import { TOKEN_SECRET } from './../config/constants.js';


export const tokenVerificationMiddleware = (req, res, next) => {
    let token = req.headers['user-authorization'];
    
    if (token) {
        return jwt.verify(token, TOKEN_SECRET)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            res.status(403).json({ error: 'Your session has expired. Please, login to your account.' })
        })
    }
    next();
} 

// export const isOwnerMiddleware = (req, res, next) => {
//     let listingId = req.params.listingId;
//     let user = req.user;

//     if (listing)

// }