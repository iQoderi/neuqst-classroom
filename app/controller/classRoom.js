"use strict";
module.exports = app => {
    class ClassController extends app.Controller {
        async index(cxt) {
            cxt.body = 'get';
        }

        async create(cxt) {
            cxt.body = 'create';
        }

        async show(cxt) {
            ctx.body = 'detail';
        }

        async destroy(cxt) {
            cxt.body = 'delete';
        }

        async update(cxt) {
            cxt.body = 'update';
        }
    }

    return ClassController;
};
