"use strict";

module.exports = app => {
    class ApplyController extends app.Controller {
        async index(ctx) {
            const { page = 1 , size = 10 } = ctx.query;
            const applys = await ctx.service.apply.list(page, size);
            ctx.body = {
                code: 0,
                data: {
                    applys,
                }
            }
        }

        async create(ctx) {
            ctx.body = 'create';
        }

        async show(ctx) {
            const { id } = ctx.params;
            const apply = await ctx.service.apply.detail(id);
            ctx.body = {
                code: 0,
                data: {
                    apply,
                },
            }
        }

        async destroy(ctx) {
            ctx.body = 'delete';
        }

        async update(ctx) {
            ctx.body = 'update';
        }
    }

    return ApplyController;
};