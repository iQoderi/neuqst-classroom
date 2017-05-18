"use strict";

const checkToken = require('../middleware/checkToken');

module.exports = app => {
    app.get('/user/info', checkToken(app), 'user.info');
};
