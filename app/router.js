'use strict';

module.exports = app => {
    console.log(app.auth, 'auth');
    require('./lib/routerLoader')(app);
};
