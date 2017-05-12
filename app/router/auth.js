"use strict";

module.exports = app => {
    app.post('/auth/registry', 'auth.registry');
    app.post('/auth/login', 'auth.login');
    app.post('/auth/forgetPass', 'auth.forgetPass');
    app.post('/auth/updatePass', 'auth.updatePass');
};