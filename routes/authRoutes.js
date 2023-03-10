import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/auth.js';

import {login, register, updateUser, fetchUsers} from '../controllers/authController.js';

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: 'Too many requests from this IP address, please try again after 15 minutes.',
})

router.route('/allUsers').get(fetchUsers);
router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/updateUser').patch(authenticateUser ,updateUser);

export default router;