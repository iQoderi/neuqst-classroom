"use strict";

module.exports = app => {
    class AdminController extends app.Controller {
        async index (ctx) {
            ctx.body = 'get admin';
        }

        async create (ctx) {
            ctx.body = 'create admin';
        }

        async destroy (ctx) {
            ctx.body = 'destroy admin';
        }

        async update (ctx) {
            ctx.body = 'update admin';
        }

        async show (ctx) {
            ctx.body = 'admin detail';
        }
    }

    return AdminController;
};