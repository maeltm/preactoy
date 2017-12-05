import express from 'express';
import auth from './auth';
import ping from './ping';

const router = express.Router();
router.use('/ping', ping);
router.use('/auth', auth);

export default router;
