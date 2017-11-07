import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';

import api from './routes';
import { ErrorHandle } from './common/responseUtil';

const app = express();
const port = 4000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(session({
    secret: 'Secret!@#',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        maxAge: 60 * 60 * 1000
    }
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/api', api);

app.use(ErrorHandle);
app.use(function(err, req, res, next) {
    res.status(500).send('Something broke!');
    return next();
});

app.listen(port, () => {
});
