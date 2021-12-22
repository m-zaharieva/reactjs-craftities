import { Router } from "express";

import * as authService from "../services/authService.js";



const router = Router();


router.post('/register', (req, res) => {
    let userData = req.body;
    
    authService.register(userData)
        .then(user => {
            return Promise.all([authService.createToken(user), user]) 
        })
        .then(([token, user]) => {
            let result = {
                token: token,
                userId: user._id,
            }
            res.json(result); 
        })
        .catch(error => {
            console.log(error.message);
            res.status(403).json({error: error.message});
        });
});

router.post('/login', (req, res) => {
    let data = req.body;

    authService.login(data)
        .then(user => {
            return Promise.all([authService.createToken(user), user])
        })
        .then(([token, user]) => {
            let result = {
                token: token,
                userId: user._id,
            }
            res.json(result); 
        })
        .catch(error => {
            console.log(error.message);
            res.status(403).json({error: error.message});
        });
});

router.get('/logout', (req, res) => {
    let token = req.headers['user-authorization'];
    authService.logout(token)
        .then(user => {
            res.status(200).json({message: "You have been successfully logged out."})
        })
        .catch(err => {
            res.status(403).json({error: "Your session token has expired. Please, login to your account"})
            console.log(err);
        })
});




export default router;