import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/auth.js';

import {login, register, updateUser, fetchUsers} from '../controllers/authController.js';

router.route('/allUsers').get(fetchUsers);
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(authenticateUser ,updateUser);

export default router;