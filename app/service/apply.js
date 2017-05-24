"use strict";

module.exports = app => {
    class ApplyService extends app.Service {
        async list(page, size) {
            const result = await this.app.mysql.select('apply', {
                limit: size * 1,
                offset: size * (page - 1),
            });
            return result;
        }

        async detail(id) {
            const result = await this.app.mysql.get('apply', { id });
            return result;
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