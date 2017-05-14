"use strict";
module.exports = opt => {
    return async function (ctx, next) {
        const { flag = 1 } = opt;  // 0 检查不存在 1 检查存在
        const { email } = ctx.request.body;
        const codeMap = {
            0: 10001,
            1: 10002,
        };

        const qs = { email };
        const result = await ctx.service.auth.userExist(qs);

        if ((result === null && flag === 0) || (result !== null && flag === 1)) {
            return await next;
        }

        return ctx.body = { code: codeMap[flag] };
    }
};