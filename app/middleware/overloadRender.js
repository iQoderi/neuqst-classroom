"use strict";

const url = require('../lib/url');

module.exports = () => {
    return async (ctx, next) => {
        ctx._render = ctx.render;
        const neuqstUrl = url.call(ctx.app);
        ctx.render = (templatePath, data) => {
            if (data === undefined) {
                data = {};
            }

            data = Object.assign(data, {
                neuqstUrl,
            });

            return ctx._render(templatePath, data);
        };

        await next();
    };
};
