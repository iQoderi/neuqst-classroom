"use strict";

module.exports = app => {
    class IndexController extends app.Controller {
        async index(ctx) {
            await ctx.render('index');
        }

        async error(ctx) {
            await ctx.render('errorPage', {
                pageTitle: '我是错误头',
                pageMsg: '我是错误体,我是错误体,我是错误体',
            });
        }

        async registerItem(ctx) {
            const { originUrl } = ctx.app.config;
            const { query } = ctx.request;
            await ctx.render('pageItem', Object.assign({
                pageTitle: '我是跳转头',
                link: `${originUrl}auth/login`,
            }, query));
        }

        async resetPassItem(ctx) {
            const { originUrl }= ctx.app.config;
            const { query } = ctx.request;
            await ctx.render('pageItem', Object.assign({
                pageTitle: '我是跳转头',
                link: `${originUrl}/auth/resetPass`,
            }, query));
        }
    }

    return IndexController;
};