"use strict";

const { sendActiveMail, sendResetPassMail } = require('../lib/mail');

/**
 * 发送激活邮件
 */
exports.sendActiveMail = async (ctx, next) => {
    const { email, name } = ctx.state.user;
    const { signToken } = ctx.app.auth;
    const { auth: { session: { secrets } } } = ctx.app.config;
    const token = signToken(email + secrets, '2h');
    sendActiveMail.call(ctx, email, token, name);
    await next();
};


/**
 * 发送重置密码邮件
 */
exports.sendResetPassMail = async (ctx, next) => {
    const { email } = ctx.request.body;
    const { name } = ctx.state.user;
    const { auth: { session: { secrets } } } = ctx.app.config;
    const token = ctx.app.auth.signToken(email + secrets, '2h');
    ctx.state.user.key = token;
    sendResetPassMail.call(ctx, email, token, name);
    await next();
};