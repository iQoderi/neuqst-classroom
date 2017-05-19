"use strict";
module.exports = () => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (err) {
            ctx.app.emit('error', err, ctx);
            ctx.logger.error('error', err);
            const { name, message } = err;
            const serverPrefixPath = ['/auth/resetPass', '/auth/active'];
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

            if (code === -1) {
                return ctx.body = {
                    code,
                    message,
                }
            }

            return ctx.body = {
                code,
            };
        }
    }
};