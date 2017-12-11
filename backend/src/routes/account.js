import express from 'express';

import * as Account from '../api/account';
import { catchAsyncErrors } from '../common/routeUtil';

const router = express.Router();

router.post('/signin', catchAsyncErrors(Account.signIn));
router.post('/signup', catchAsyncErrors(Account.signUp));

export default router;