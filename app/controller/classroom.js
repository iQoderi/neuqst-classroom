"use strict";
module.exports = app => {
    class ClassController extends app.Controller {
        async index(ctx) {
            const classroom = await ctx.service.classroom.list();
            ctx.body = {
                code: 0,
                data: {
                    classroom,
                }
            }
        }

        async create(ctx) {
            ctx.body = 'create';
        }

        async show(ctx) {
            ctx.body = 'detail';
        }

        async destroy(ctx) {
            ctx.body = 'delete';
        }

        async update(ctx) {
            ctx.body = 'update';
        }
    }

    return ClassController;
};
