const debug = require('debug')('server:util');

export function catchAsyncErrors(fn) {
    return (req, res, next) => {
        const routePromise = fn(req, res, next);
        if (routePromise.catch) {
            routePromise.catch(err => {
                debug(err);
                next(err);
            });
        }
    };
}
