"use strict";

const checkToken = require('../middleware/checkToken');

module.exports = app => {
    app.get('/apply', 'apply.index');
    app.get('/apply/:id', 'apply.show');
    app.delete('/apply/:id',  checkToken(app), app.auth.hasRole(3), 'apply.destroy');
    app.post('/apply', checkToken(app), 'apply.create');
    // app.resources('apply', '/apply', 'apply');
};
