"use strict";

module.exports = app => {
    class UserController extends app.Controller {
        async info(ctx) {
            ctx.body = {
                code: 0,
                data: {
                    user: ctx.state.user,
                }
            };
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