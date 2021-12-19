import { Router } from "express";

import * as authService from "../services/authService.js";
import * as userService from "../services/userService.js";



const router = Router();


router.get('/:userId', (req, res) => {
    let token = req.headers['user-authorization'];
    let userId = req.params.userId;

    authService.varifyToken(token)
        .then(decodedToken => {
            return userService.findUserById(userId)
        })
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json({error: "Your session has expired. Please, login to your profile."})
        });
})





export default router;