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
            const { email, password } = ctx.request.body;
            const query = {
                email,
                password,
            };
            const result = await ctx.service.auth.login(query);
            ctx.body = {
                code: 0,
                data: {
                    msg: 'success',
                },
            };
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
