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
            const { body } = ctx.request;
            const admin = Object.assign(body, {
                role: 3,
                isActive: 1,
                password: await ctx.app.auth.encrypt(body.password),
            });
            const isSuccess = await ctx.service.admin.create(admin);
            if (isSuccess) {
                return ctx.body = {
                    code: 0,
                };
            }

            ctx.body = {
                code: 30004,
            }
        }

        async destroy (ctx) {
            const { id } = ctx.params;
            const { id:uid } = ctx.state.user;
            if (parseInt(id) === parseInt(uid)) {
                return ctx.body = {
                    code: 30002,
                }
            }
            const isSuccess = await ctx.service.admin.remove(id);
            if (isSuccess) {
                return ctx.body = {
                    code: 0,
                };
            }
            ctx.body = {
                code: 30001
            }
        }

        async update (ctx) {
            const { id } = ctx.params;
            const { body= {} } = ctx.request;
            const row = Object.assign(body, { id });
            const isSuccess= await ctx.service.admin.update(row);
            if (isSuccess) {
                return ctx.body = {
                    code: 0,
                }
            }

            ctx.body = {
                code: 30003,
            }
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