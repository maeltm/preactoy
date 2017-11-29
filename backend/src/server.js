import * as _ from 'lodash';
import * as http from 'http';

import app from './app';

const debug = require('debug')('server:server');

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (_.isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    switch (error.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const server = http.createServer(app);

function onListening() {
    const addr = server.address();
    const bind = _.isString(addr) ? `Pipe ${port}` : `Port ${port}`;
    debug(`Listening on ${bind}`);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
