"use strict";

module.exports = app => {
    class ApplyService extends app.Service {
        async list() {
            const result = await this.app.mysql.select('apply');
            return result;
        }

        async detail(id) {

        }

        async create(apply) {

        }

        async remove(id) {

        }

        async update(row) {

        }
    }

    return ApplyService;
};