import * as _ from 'lodash';

export function Success(res, body = {}) {
    return res.status(200).json(_.extend({ status: 'success' }, body));
}

export function Fail(message, status = 500) {
    let err = new Error(message);
    err.status = status;
    return err;
}

export function ErrorHandle(err, req, res, next) {
    if (err.status) {
        res.status(err.status).json({
            status: 'error',
            message: err.message ? err.message : err
        });
        return next();
    }
}
