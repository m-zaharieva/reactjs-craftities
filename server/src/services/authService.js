import bcrypt from 'bcrypt';

import * as jwt from '../helpers/jwtHelper.js';
import { TOKEN_SECRET } from '../config/constants.js';
import User from "../models/User.js";
import * as userService from './userService.js';



export const register = async (userData) => {
    let user = await userService.findUserByEmail(userData.email);
    if (user) {
        throw new Error ('This email is already taken. Would you like to login instead?');
    }
    let hash = await bcrypt.hash(userData.password, 10);
    userData.password = hash;
    return await User.create(userData);
};


export const login = (data) => {
    return userService.findUserByEmail(data.email)
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


export const logout = (token) => {
    console.log('logout service');
    return jwt.verify(token, TOKEN_SECRET);
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


export const varifyToken = (token) => {
    return jwt.verify(token, TOKEN_SECRET);
}