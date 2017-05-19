"use strict";
module.exports = app => {
    class ClassController extends app.Controller {
        async index(ctx) {
            const classrooms = await ctx.service.classroom.list();
            ctx.body = {
                code: 0,
                data: {
                    classrooms,
                }
            }
        }

        async create(ctx) {
            ctx.body = 'create';
        }

        async show(ctx) {
            const { id } = ctx.params;
            const classroom = await ctx.service.classroom.detail(id);
            ctx.body = {
                code: 0,
                data: {
                    classroom,
                }
            };
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
