"use strict";

module.exports = app => {
    class AuthController extends app.Controller {
        async register(ctx) {
            const { body } = ctx.request;
            const result = await ctx.service.auth.register(body);
            ctx.body = {
                code: 0,
                data: {
                    msg: 'success'
                }
            };
        }

        async login(ctx) {
            const { password } = ctx.request.body;
            const { user } = ctx.state;
            if (password !== user.password) {
                ctx.body = {
                    code: 10003,
                };
            } else {
                ctx.body = {
                    code: 0,
                };
            }
        }

        async forgetPass(ctx) {
            ctx.body = 'forgetPass';
        }

        async updatePass(ctx) {
            ctx.body = 'updatePass';
        }
    }

    return AuthController;
};
