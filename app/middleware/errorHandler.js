"use strict";
module.exports = () => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (err) {
            ctx.app.emit('error', err, ctx);
            const { name, message } = err;
            const serverPrefixPath = ['/auth/resetPass'];
            const { method, path } = ctx.request;
            let code;
            if (name === 'JsonWebTokenError') {
                code = 10005;
            } else {
                code = -1;
            }

            if (method === 'GET' && serverPrefixPath.indexOf(path) !== -1) {
                return await ctx.errorPage(name, message);
            }

            return ctx.body = {
                code,
            };
        }
    }
};