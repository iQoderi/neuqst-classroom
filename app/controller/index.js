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
    }

    return IndexController;
};