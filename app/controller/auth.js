"use strict";

module.exports = app => {
  class AuthController extends app.Controller {
      async registry(cxt) {
          cxt.body = {
              code: 0,
              data: {
                  msg: 'success'
              }
          };
      }

      async login(cxt) {
          cxt.body = 'login';
      }

      async forgetPass(cxt) {
          cxt.body = 'forgetPass';
      }

      async updatePass(cxt) {
          cxt.body = 'updatePass';
      }
  }

  return AuthController;
};
