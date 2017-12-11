import express from 'express';
import auth from './auth';
import ping from './ping';
import account from './account';

const router = express.Router();
router.use('/ping', ping);
router.use('/auth', auth);
router.use('/account', account);

export default router;
