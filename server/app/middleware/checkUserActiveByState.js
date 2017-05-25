"use strict";

module.exports = async (ctx, next) => {
    const { isActive } = ctx.state.user;
    if (isActive !== 1) {
        return ctx.body = {
            code: 10010,
        }
    }

    await next();
};