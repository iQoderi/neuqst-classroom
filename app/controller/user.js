"use strict";

module.exports = app => {
    class UserController extends app.Controller {
        async info(ctx) {
            // console.log(ctx.state.user);

            ctx.body = 'user info';
        }

        async apply(ctx) {
            ctx.body = 'user apply';
        }

        async applys(ctx) {
            ctx.body = 'user applys';
        }

    }

    return UserController;
};