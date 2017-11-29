import bluebird from 'bluebird';
import mongoose from 'mongoose';

const debug = require('debug')('server:database');

mongoose.Promise = bluebird;
const db = mongoose.connection;
db.on('error', debug);
db.once('open', () => { debug('Connected to mongodb server'); });
switch (process.env.NODE_ENV) {
    case 'test':
        mongoose.connect(process.env.TEST_DATABASE_URL, { useMongoClient: true });
        break;
    default:
        mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true });
}
