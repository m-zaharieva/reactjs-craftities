import { Router } from "express";

import userController from './controllers/userController.js';

const router = Router();

router.use('/user', userController)

export default router;

