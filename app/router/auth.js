"use strict";

module.exports = app => {
    const userExist = app.middlewares.userExist({ flag: 0 });
    app.post('/auth/register', userExist, 'auth.register');
    app.post('/auth/login', 'auth.login');
    app.post('/auth/forgetPass', 'auth.forgetPass');
    app.post('/auth/updatePass', 'auth.updatePass');
};