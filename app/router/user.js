"use strict";

const checkToken = require('../middleware/checkToken');
const checkUserActiveByState = require('../middleware/checkUserActiveByState');

module.exports = app => {
    app.get('/user/info', checkToken(app), checkUserActiveByState, 'user.info');
    app.put('/user/password', checkToken(app, 1), checkUserActiveByState, 'user.updatePass');
};
