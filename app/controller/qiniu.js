"use strict";

const uuid = require('uuid');

module.exports = app => {
    class QiniuController extends app.Controller {
        async upload(ctx) {
            const stream = await ctx.getFileStream();
            const buf = stream.read(10240);
            const qiniu = new (app.qiniu())();
            const { endPoint } = ctx.app.config.qiniu;
            const key = uuid.v4() + stream.filename;
            const result = await qiniu.uploadFile(key, buf);
            if (result.key) {
                const url = `${endPoint}/${result.key}`;
                return ctx.body = {
                    code: 0,
                    data: {
                        url,
                    },
                };
            } else {
                ctx.body = {
                    code: 90001
                }
            }
        }
    }

    return QiniuController;
};
