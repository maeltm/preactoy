import express from 'express';

import * as Ping from '../api/ping';
import { catchAsyncErrors } from '../common/routeUtil';

const router = express.Router();

router.get('/', catchAsyncErrors(Ping.Ping));

export default router;
