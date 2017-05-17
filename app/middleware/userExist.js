"use strict";
module.exports = opt => {
    /**
     * 判断用户是否存在
     */
    return async function (ctx, next) {
        const { flag = 1 } = opt;  // 0 检查不存在 1 检查存在
        const { email } = ctx.request.body;
        const codeMap = {
            0: 10001,
            1: 10002,
        };

        const qs = { email };
        const result = await ctx.service.auth.userExist(qs);

        if ((result === null && flag === 1) || (result !== null && flag === 0)) {
            if (flag === 0) {
                ctx.state.user = result;
            }

            if (flag === 1) {
                ctx.state.user = ctx.request.body;
            }
            return await next();
        }

        return ctx.body = { code: codeMap[flag] };
    }
};