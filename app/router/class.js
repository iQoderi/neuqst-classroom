"use strict";

const checkToken = require('../middleware/checkToken');

module.exports = app => {
    app.get('/classroom', 'classroom.index');
    app.get('/classroom/:id', 'classroom.show');
    app.post('/classroom', checkToken(app), app.auth.hasRole(3), 'classroom.create');
    app.put('/classroom/:id', checkToken(app), app.auth.hasRole(3), 'classroom.update');
    app.delete('/classroom', checkToken(app), app.auth.hasRole(3), 'classroom.destroy');
};
