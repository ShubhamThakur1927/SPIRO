import express from 'express';
import {registerController} from '../controllers/authController.js';

const router = express.Router();

//routing

router.post('/signup', registerController);

export default router;