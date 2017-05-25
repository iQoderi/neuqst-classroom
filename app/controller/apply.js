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
            const { body } = ctx.request;
            const { classroomId } = body;
            const classroom = await ctx.service.classroom.detail(classroomId);
            if (!classroom) {
                return ctx.body = {
                    code: 20002,
                }
            }
            const { status, name: classname, imgUrl: classImg, place: classPlace } = classroom;
            if (status === 1) {
                return ctx.body = {
                    code: 20003,
                }
            }
            const [createAt, updateAt] = [Date.now(), Date.now()];
            const { id: uid, name: uname, role: urole, phone: uphone} = ctx.state.user;
            const apply = Object.assign(body, {
                createAt,
                updateAt,
                uid,
                uname,
                urole,
                uphone,
                classname,
                classImg,
                classPlace,
            });
            const isSuccess = await ctx.service.apply.create(apply);
            if (isSuccess) {
                return ctx.body = {
                    code: 0,
                }
            }

            // ctx.body = 'create';
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
            const { id } = ctx.params;
            const isSuccess = await ctx.service.apply.remove(id);
            if (isSuccess) {
                return ctx.body = {
                    code: 0,
                };
            }
            ctx.body = {
                code: 40001,
            }
        }

        async update(ctx) {
            ctx.body = 'update';
        }
    }

    return ApplyController;
};