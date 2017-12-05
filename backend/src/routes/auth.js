import { Router } from 'express';

import * as Auth from '../api/auth';
import { catchAsyncErrors } from '../common/routeUtil';

const router = Router();

router.post('/register', catchAsyncErrors(Auth.Register));
router.post('/login', catchAsyncErrors(Auth.Login));
router.get('/me', catchAsyncErrors(Auth.Me));
router.get('/logout', catchAsyncErrors(Auth.Logout));

export default router;
