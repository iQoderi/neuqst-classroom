"use strict";

module.exports = () => {
  return async (ctx, next) => {
      ctx.errorPage = (title, msg) => {
          return ctx.render('errorPage', {
              pageTitle: title,
              pageMsg: msg,
          });
      };
      await next();
  };
};