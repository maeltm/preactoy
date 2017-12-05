import _ from 'lodash';
import * as jwt from 'jsonwebtoken';
import User from '../models/user';
import { Fail, Success } from '../common/responseUtil';

// const debug = require('debug')('server:auth');

export async function Register(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    let usernameRegex = /^[A-z0-9]+$/;
    if (!usernameRegex.test(username)) {
        throw Fail('bad username', 400);
    }

    if (!_.isString(password) || password.length < 4) {
        throw Fail('bad password', 400);
    }

    let exists = await User.findOne({ username });

    if (exists) {
        throw Fail('already exist username', 409);
    }

    let user = new User({
        username,
        password
    });

    user.password = user.generateHash(password);

    await user.save();
    let token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: 60 * 60 * 24
    });

    return Success(res, { token });
}

export async function Login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    let usernameRegex = /^[A-z0-9]+$/;
    if (!usernameRegex.test(username)) {
        throw Fail('bad username', 400);
    }

    if (!_.isString(password) || password.length < 4) {
        throw Fail('bad password', 400);
    }

    let user = await User.findOne({ username });

    if (!user || !user.validateHash(password)) {
        throw Fail('login failed', 401);
    }

    let token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: 60 * 60 * 24
    });

    return Success(res, { token });
}

export function Me(req, res) {
    return Success(res);
}

export function Logout(req, res) {
    return Success(res);
}
