"use strict";

module.exports = app => {
    app.get('/', 'index.index');
    app.get('/error', 'index.error');
};
