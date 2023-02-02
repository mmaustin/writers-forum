import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/auth.js';

import {createContribution, getContributions, deleteContribution} from '../controllers/contributionController.js';

router.route('/').post(authenticateUser, createContribution).get(authenticateUser, getContributions);
router.route('/:id').delete(authenticateUser, deleteContribution);

export default router;