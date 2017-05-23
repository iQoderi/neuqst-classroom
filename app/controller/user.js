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

        async updatePass(ctx) {
            const { oldPass, newPass } = ctx.request.body;
            const { id, password } = ctx.state.user;
            const { validate } = ctx.app.auth;
            const isSame = await validate(oldPass, password);
            if (!isSame) {
                return ctx.body = {
                    code: 10015,
                };
            }

            const hashPass = await ctx.app.auth.encrypt(newPass);
            const isSuccess = await ctx.service.user.resetPass(id, hashPass);
            if (isSuccess) {
                return ctx.body = {
                    code: 0,
                };
            }

            ctx.body = {
                code: 10016,
            }
        }
    }

    return UserController;
};