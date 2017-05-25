"use strict";
module.exports = app => {
    class ClassController extends app.Controller {
        async index(ctx) {
            const classrooms = await ctx.service.classroom.list();
            console.log('classrooms', classrooms);
            ctx.body = {
                code: 0,
                data: {
                    classrooms,
                }
            }
        }

        async create(ctx) {
            const { body } = ctx.request;
            const isSuccess = await ctx.service.classroom.create(body);
            if (isSuccess) {
                return ctx.body = {
                    code: 0,
                }
            } else {
                return ctx.body = {
                    code: 20001,
                }
            }
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
            const { id } = ctx.params;
            const isSuccess = await ctx.service.classroom.remove(id);
            if (isSuccess) {
                ctx.body = {
                    code: 0,
                };
            } else {
                ctx.body = {
                    code: 20002,
                }
            }
        }

        async update(ctx) {
            const { body = {} } = ctx.request;
            const { id } = ctx.params;
            const row = Object.assign(body, { id });
            const isSuccess = await ctx.service.classroom.update(row);
            if (isSuccess) {
                ctx.body = {
                    code: 0,
                }
            } else {
                ctx.body = {
                    code: 20002,
                }
            }
        }
    }

    return ClassController;
};
