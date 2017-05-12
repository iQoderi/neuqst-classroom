"use strict";

module.exports = app => {
    class UserController extends app.Controller {
        async info(cxt) {
            cxt.body = 'user info';
        }

        async apply(cxt) {
            cxt.body = 'user apply';
        }

        async applys(cxt) {
            cxt.body = 'user applys';
        }

    }

    return UserController;
};