"use strict";

const compose = require('koa-compose');

module.exports = (app, flag = 0) => {
    return compose([
        app.auth.decodedToken,
        async (ctx, next) => {
            const { _id, exp } = ctx.state.user;
            const accessToken = ctx.request.headers.access_token || ctx.request.query.access_token;
            const now =Date.now();
            if (!_id || now >= exp * 1000) {
               return ctx.body = {
                    code: 10005,
                };
            }
            const user =await ctx.service.user.findUserById(_id);
            if (!user) {
                return ctx.body = {
                    code: 10005,
                };
            }
            const { token } = user;
            if (token !== accessToken) {
                return ctx.body = {
                    code: 10005,
                };
            }
            const { id, name, email, role, college, major, code, isActive, password } = user;
            const ret = {
                id,
                name,
                email,
                role,
                college,
                major,
                class: user.class,
                code,
                isActive,
            };
            if (flag === 1) {
                ret.password = password;
            }
            ctx.state.user = ret;
            await next();
        }
    ]);
};