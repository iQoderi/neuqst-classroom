"use strict";
const compose = require('koa-compose');


const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

module.exports = (app, methods) => {
    return async (ctx, next) => {
            const { method } = ctx.request;
            if (methods.indexOf(method) === -1) {
                await next();
            } else {

            }
        };

};