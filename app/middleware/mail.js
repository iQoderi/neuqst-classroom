"use strict";

const { sendActiveMail, sendResetPassMail } = require('../lib/mail');

/**
 * 发送激活邮件
 */
exports.sendActiveMail = async (ctx, next) => {
    const { email, name, password } = ctx.state.user;
    const { signToken } = ctx.app.auth;
    const { auth: { session: { secrets } } } = ctx.app.config;
    const token = signToken(email + password + secrets);
    sendActiveMail.call(ctx, email, token, name);
    next();
};


/**
 * 发送重置密码邮件
 */
exports.sendResetPassMail = async (ctx, next) => {
    const { email } = ctx.request.body;
    const result = ctx.service.user.findUserByMail(email);
    console.log(email, 'email');
};