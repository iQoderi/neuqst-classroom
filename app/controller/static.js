"use strict";

module.exports = app => {
    class IndexController extends app.Controller {
        async index(ctx) {
            await ctx.render('index');
        }

        async error(ctx) {
            const { originUrl } = ctx.app.config;
            await ctx.render('errorPage', {
                originUrl,
                pageTitle: '我是错误头',
                pageMsg: '我是错误体,我是错误体,我是错误体',
            });
        }

        async registerItem(ctx) {
            const { originUrl } = ctx.app.config;
            const { query } = ctx.request;
            await ctx.render('pageItem', Object.assign({
                pageTitle: '返回登录页面',
                link: `${originUrl}auth/login`,
            }, query));
        }

        async resetPassItem(ctx) {
            const { originUrl }= ctx.app.config;
            const { query } = ctx.request;
            await ctx.render('pageItem', Object.assign({
                pageTitle: '返回重置密码页面',
                link: `${originUrl}/auth/resetPass`,
            }, query));
        }
    }

    return IndexController;
};