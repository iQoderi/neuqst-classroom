"use strict";

const userExist = require('../middleware/userExist');
const checkUserActiveByState = require('../middleware/checkUserActiveByState');
const { sendActiveMail , sendResetPassMail} = require('../middleware/mail');

module.exports = app => {
    app.get('/auth/active', app.auth.decodedToken, 'auth.activeAccount');
    app.get('/auth/resetPass', app.auth.decodedToken, 'auth.resetPassItem');
    app.post('/auth/register', userExist({ flag: 1 }), sendActiveMail, 'auth.register');
    app.post('/auth/login', userExist({ flag: 0 }), checkUserActiveByState, 'auth.login');
    app.post('/auth/forgetPass', userExist({ flag: 0 }), checkUserActiveByState, sendResetPassMail, 'auth.forgetPass');
    app.post('/auth/resetPass', app.auth.decodedToken, 'auth.resetPass');
    app.post('/auth/reactive', userExist({ flag: 0 }), 'auth.reActive');
};
