"use strict";

const async = require('async');
const { activeMailTpl, resetPassMailTpl } = require('../lib/mailTemplate');

/**
 * 发送邮件
 * @param {object } data 邮件对象
 */
const sendMail = function(data) {
    //重试五次
    async.retry({times: 5 }, (done) => {
        this.app.email.sendMail(data, (err) => {
            if (err) {
                //写为日志
                this.logger.error('send mail error', err, data);
                return done(err);
            }
            return done();
        });
    }, (err) => {
        if (err) {
            return this.logger.error('send mail finally error', err, data);
        }
        this.logger.info('send mail success', data);
    });
};

exports.sendMail = sendMail;

/**
 * 发送激活通知邮件
 * @param {String} who 接收人邮件地址
 * @param {String} token 重置用的token字符串
 * @param {String} name 接收人用户名
 */
exports.sendActiveMail =function(who, token, name) {
    const { email, host } = this.app.config;
    const from = `${email.name}< ${email.from} >`;
    const to = who;
    const subject = `${email.name} 账号激活`;
    const link = `${host}/auth/resetPass?token=${token}&name=${name}`;
    const html = activeMailTpl(name, link);
    sendMail.call(this, {
        from,
        to,
        subject,
        html,
    });
};

/**
 * 发送重置密码邮件
 * @param {String} who 接收人邮件地址
 * @param {String} token 重置用的token字符串
 * @param {String} name 接收人用户名
 */
exports.sendResetPassMail = function (who, token, name) {
    const { email, host } = this.app.config;
    const from = `${email.name} < ${email.from} >`;
    const to = who;
    const subject = `${email.name} 忘记密码`;
    const link = `${host}/auth/resetPass?token=${token}&name=${name}`;
    const html = resetPassMailTpl(name, link);
    sendMail.call(this, {
        from,
        to,
        subject,
        html,
    });
};
