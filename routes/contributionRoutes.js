import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/auth.js';

import {createContribution, getContributions, deleteContribution} from '../controllers/contributionController.js';

router.route('/').get(authenticateUser, getContributions).post(authenticateUser, createContribution);
router.route('/:id').delete(authenticateUser, deleteContribution);
