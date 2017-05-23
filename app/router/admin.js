"use strict";

const checkToken = require('../middleware/checkToken');

module.exports = app => {
    app.resources('admin', '/admin', checkToken(app), app.auth.hasRole(3), 'admin');
};