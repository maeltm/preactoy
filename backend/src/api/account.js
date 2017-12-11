const SIGN_IN_SUCCESS = 0;
const SIGN_UP_SUCCESS = 0;

const testdebug = require('debug')('server:backend');

export function signUp(req, res){
    let data = req.body;
    testdebug(data);

    let tempObj = {
        "success":"true",
        "result": SIGN_UP_SUCCESS
    };
    return res.status(200).send(tempObj);
}

export function signIn(req, res){
    let data = req.body;
    testdebug(data);

    let tempObj = {
        "success":"true",
        "result": SIGN_IN_SUCCESS
    };
    return res.status(200).send(tempObj);
}