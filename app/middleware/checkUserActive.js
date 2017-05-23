"use strict";

module.exports = async (ctx, next) => {
    const { isActive } = ctx.state.user;
    if (isActive === 1) {
        return await next();
    }

    ctx.body = {
        code: 10010
    }
};
