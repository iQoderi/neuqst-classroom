"use strict";

module.exports = app => {
    class AdminController extends app.Controller {
        async index (ctx) {
            const admin = await ctx.service.admin.list();
            ctx.body = {
                code: 0,
                data: {
                    admin,
                }
            }
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
            const { id } = ctx.params;
            const admin = await ctx.service.admin.detail(id);
            ctx.body = {
                code: 0,
                data: {
                    admin,
                }
            }
        }
    }

    return AdminController;
};