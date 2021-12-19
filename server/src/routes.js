import { Router } from "express";

import authController from './controllers/authController.js';
import dataController from './controllers/dataController.js';
import userController from './controllers/userController.js';



const router = Router();
router.use('/auth', authController);
router.use('/user', userController);
router.use('/data', dataController);



export default router;

