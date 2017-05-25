"use strict";

module.exports = app => {
    app.get('/', 'static.index');
    app.get('/error', 'static.error');
    app.get('/resetPassItem', 'static.resetPassItem');
    app.get('/registerItem', 'static.registerItem')
};
