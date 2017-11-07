import express from 'express';
import ping from './ping';

const router = express.Router();
router.use('/ping', ping);

export default router;
