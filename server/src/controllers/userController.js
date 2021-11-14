import { Router } from "express";
import { register } from "../services/userService.js";

const router = Router();

router.post('/register', (req, res) => {
    let data = req.body;
    console.log(data);
    register(data)
        .then(user => {
            res.json(user);
        });
});

export default router;