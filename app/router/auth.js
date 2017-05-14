"use strict";

module.exports = app => {
    app.post('/auth/register', 'auth.register');
    app.post('/auth/login', 'auth.login');
    app.post('/auth/forgetPass', 'auth.forgetPass');
    app.post('/auth/updatePass', 'auth.updatePass');
};