"use strict";

const { sendActiveMail } = require('../lib/mail');

module.exports = app => {
    class AuthController extends app.Controller {
        async register(ctx) {
            const { body } = ctx.request;
            body.role = 0;
            body.password = await ctx.app.auth.encrypt(body.password);
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
            const { query = {}} = ctx.request;
            const { email } = query;
            const { _id, exp } = ctx.state.user;
            const now = Date.now();
            if (now >= exp * 1000) {
                return await ctx.errorPage('token过期', 'token过期或者不合法(10005)');
            }

            const user = await ctx.service.user.findUserByMail(email);
            if (!user) {
                return await ctx.errorPage('用户不存在', '用户不存在(10001)');
            }
            if (user.isActive === 1) {
                return await ctx.errorPage('用户已激活', '用户账户已经激活(10006)');
            }
            const { email: savedEmail, id } = user;
            const { secrets } = ctx.app.config.auth.session;
            const { originUrl } = ctx.app.config;
            if (_id !== savedEmail + secrets ) {
                return await ctx.errorPage('信息有误', '用户激活信息有误(10007)');
            }
            const result = await ctx.service.user.activeUser(id);
            if (result.rowsAffected === 1) {
               return await ctx.render('pageItem', Object.assign({
                    pageTitle: '返回登录页面',
                    link: `${originUrl}/auth/login`,
               }, query));
            }
            return await ctx.errorPage('激活失败', '用户账户激活失败(10008)');
        }

        async login(ctx) {
            const { password } = ctx.request.body;
            const { user } = ctx.state;
            const { password:hashPass } = user;
            const { validate } = ctx.app.auth;
            const isSame = await validate(password, hashPass);
            if (!isSame) {
                return ctx.body = {
                  code: 10011,
                };
            }

            const token = ctx.app.auth.signToken(user.id);
            await ctx.service.auth.saveToken(user.id, token);
            ctx.body = {
                code: 0,
                data: {
                    token,
                    role: user.role,
                }
            }
        }

        async reActive(ctx) {
            const { isActive } = ctx.state.user;
            if (isActive === 1) {
                return ctx.body = {
                    code: 10012,
                };
            } else {
                const { email, name } = ctx.state.user;
                const { signToken } = ctx.app.auth;
                const { auth: { session: { secrets } } } = ctx.app.config;
                const token = signToken(email + secrets, '2h');
                sendActiveMail.call(ctx, email, token, name);
                ctx.body = {
                    code: 0,
                }
            }
        }

        async forgetPass(ctx) {
            const { id, key } = ctx.state.user;
            const isSuccess = ctx.service.user.setUserRetrieveKey(id, key);
            if (isSuccess) {
                ctx.body = {
                    code: 0,
                };
            } else {
                ctx.body = {
                    code: 10013,
                };
            }
        }

        async resetPassItem(ctx) {
            const { originUrl }= ctx.app.config;
            const { exp } = ctx.state.user;
            const { query = {} } = ctx.request;
            const { access_token, email } = query;
            const now = Date.now();
            if (now > exp * 1000) {
                return ctx.errorPage('链接失效', '修改密码链接已经失效(10005)');
            }
            const user = await ctx.service.user.findUserByMailAndKey(email, access_token);
            if (!user) {
                return ctx.errorPage('链接失效', '修改密码链接失效或者不合法(10005)');
            }
            await ctx.render('pageItem', Object.assign({
                pageTitle: '返回重置密码页面',
                link: `${originUrl}/auth/resetPass`,
            }, query));
        }

        async resetPass(ctx) {
            const { exp } = ctx.state.user;
            const { query: { access_token, email }, body: { password } } = ctx.request;
            const now = Date.now();
            if (now > exp * 1000) {
                return ctx.body = {
                    code: 10005,
                };
            }
            const user = await ctx.service.user.findUserByMailAndKey(email, access_token);
            if (!user) {
                return ctx.body = {
                    code: 10005,
                }
            }
            const hashPass = await ctx.app.auth.encrypt(password);
            const isSuccess = await ctx.service.user.resetPass(user.id, hashPass);
            if (isSuccess) {
                await ctx.service.user.setUserRetrieveKey(user.id, hashPass);
                return ctx.body = {
                    code: 0,
                };
            }

            return ctx.body = {
                code: 10014,
            }
        }
    }

    return AuthController;
};
