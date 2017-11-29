import bluebird from 'bluebird';
import mongoose from 'mongoose';

const debug = require('debug')('server:database');

mongoose.Promise = bluebird;
const db = mongoose.connection;
db.on('error', debug);
db.once('open', () => { debug('Connected to mongodb server'); });
mongoose.connect(process.env.DATABASE_URL);
