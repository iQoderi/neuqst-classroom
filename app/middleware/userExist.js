"use strict";
module.exports = opt => {
    return async function (next) {
        const { flag = 1 } = opt;  // 0 检查存在 1 检查不存在
        const { body: { email } } = this.ctx.request;
        const codeMap = {
            0: 10001,
            1: 10002,
        };

        const qs = { email };
        const result = await this.service.auth.userExist(qs);
        console.log(result);
        await next;
    }
};