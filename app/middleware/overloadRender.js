"use strict";

const url = require('../lib/url');

module.exports = () => {
    return async (ctx, next) => {
        ctx._render = ctx.render;
        const neuqstUrl = url.call(this.app);
        ctx.render = (templatePath, data) => {
            if (data === undefined) {
                data = {};
            }

            data = Object.assign(data, {
                neuqstUrl,
            });

            return ctx.render(templatePath, data);
        };

        await next();
    };
};