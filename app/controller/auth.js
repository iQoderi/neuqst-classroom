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
            const { email: savedEmail, password, id } = user;
            const { secrets } = ctx.app.config.auth.session;
            if (_id !== savedEmail + password + secrets ) {
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
            const { password, savePass } = ctx.request.body;
            const { user } = ctx.state;
            const { password:hashPass, isActive } = user;
            const { validate } = ctx.app.auth;
            const isSame = await validate(password, hashPass);
            if (!isSame) {
                return ctx.body = {
                  code: 10011,
                };
            }
            if (isActive !== 1) {
                return ctx.body = {
                    code: 10010,
                };
            }

            const token = ctx.app.auth.signToken(user.id);
            await ctx.service.auth.saveToken(user.id, token);
            return ctx.body = {
                code: 0,
                data: {
                    token,
                }
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
