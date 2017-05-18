"use strict";

module.exports = app => {
    class IndexController extends app.Controller {
        async index(ctx) {
            await ctx.render('index');
        }
    }

    return IndexController;
};