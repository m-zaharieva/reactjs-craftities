import bcrypt from 'bcrypt';

import * as jwt from './../helpers/jwtHelper.js';
import { TOKEN_SECRET } from './../config/constants.js';
import User from "../models/User.js";


export const register = (data) => {
       return findUserByEmail(data.email)
        .then(user => {
            if (user) {
                throw new Error ('This email is already taken. Would you like to login instead?');
            }

            return bcrypt.hash(data.password, 10);
        })
        .then(hash => {
            data.password = hash;
            return User.create(data);
        });
};

export const login = (data) => {
    return findUserByEmail(data.email)
        .then(user => {
            if (!user) {
                throw new Error ('Incorrect email or password.');
            }
            return Promise.all([bcrypt.compare(data.password, user.password), user]);
        })
        .then(([isValid, user]) => {
            if (!isValid) {
                throw new Error ('Incorrect email or password.');
            }

            return user;
        });
}


export const findUserByEmail = (email) => {
    return User.findOne({email});
}

export const createToken = (user) => {
    let payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        _id: user._id,
    }

    return jwt.sign(payload, TOKEN_SECRET);
}