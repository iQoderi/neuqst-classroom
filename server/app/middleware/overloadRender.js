"use strict";


module.exports = () => {
    return async (ctx, next) => {
        ctx._render = ctx.render;
        const neuqstUrl = ctx.helper.url();
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
