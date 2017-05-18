"use strict";

module.exports = () => {
  return async (ctx, next) => {
      const { originUrl } = ctx.app.config;
      ctx.errorPage = (title, msg) => {
          return ctx.render('errorPage', {
              originUrl,
              pageTitle: title,
              pageMsg: msg,
          });
      };
      await next();
  };
};