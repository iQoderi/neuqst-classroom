"use strict";

const userExist = require('../middleware/userExist');
const { sendActiveMail } = require('../middleware/mail');

module.exports = app => {
    app.post('/auth/register', userExist({ flag: 1 }), sendActiveMail, 'auth.register');
    app.post('/auth/login', userExist({ flag: 0 }), 'auth.login');
    app.post('/auth/forgetPass', 'auth.forgetPass');
    app.post('/auth/updatePass', 'auth.updatePass');
};
