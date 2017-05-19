"use strict";

const path = require('path');
const Qiniu = require('../lib/qiniu');

module.exports = app => {
    class QiniuController extends app.Controller {
        async upload(ctx) {
            const qiniu = new Qiniu(ctx.app.config.qiniu);
            const key = 'test32.js';
            const filePath = path.join(__dirname, './auth.js');
            const result = await qiniu.uploadFile(key, filePath);
            ctx.body = {
                code: 0,
            }
        }
    }

    return QiniuController;
};