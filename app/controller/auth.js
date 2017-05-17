"use strict";

module.exports = app => {
    class AuthController extends app.Controller {
        async register(ctx) {
            const { body } = ctx.request;
            body.password =await ctx.state.user.password;
            const isSuccess = await ctx.service.auth.register(body);
            if (isSuccess) {
                ctx.body = {
                    code: 0,
                };
            } else {
                ctx.body = {
                  code: 10009,
                };
            }
        }

        async activeAccount(ctx) {
            const { email } = ctx.request.query;
            const { _id, exp } = ctx.state.user;
            const now = Date.now();
            if (now >= exp * 1000) {
                return ctx.body = {
                    code: 10005
                };
            }

            const user = await ctx.service.user.findUserByMail(email);
            if (!user) {
                return ctx.body = {
                    code: 10001,
                };
            }
            if (user.isActive === 1) {
                return ctx.body = {
                    code: 10006,
                };
            }
            const { email: saveEmail, password, id } = user;
            const { secrets } = ctx.app.config.auth.session;
            if (_id !== saveEmail + password + secrets ) {
                return ctx.body = {
                    code: 10007,
                }
            }
            const result = await ctx.service.user.activeUser(id);
            if (result.changedRows === 1) {
             return ctx.body = {
                    code: 0,
                }
            }

            ctx.body = {
                code: 10008,
            }
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
