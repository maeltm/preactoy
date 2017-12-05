import 'babel-polyfill';
import 'source-map-support/register';
import './database';

import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import api from './routes';
import { ErrorHandle } from './common/responseUtil';

const debug = require('debug')('server:app');

const app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

app.use(bodyParser.json());

app.use((req, res, next) => {
    debug('param', req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api', api);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(ErrorHandle);
app.use(function(err, req, res, next) {
    const message = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({
        status: 'error',
        message: message
    });
    return next();
});

export default app;
