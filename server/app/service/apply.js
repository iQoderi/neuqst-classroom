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
            const result = await this.app.mysql.insert('apply', apply);
            return result.affectedRows === 1;
        }

        async remove(id) {
            const result = await this.app.mysql.delete('apply', { id });
            return result.affectedRows === 1;
        }

        async update(row) {
            const result = await this.app.mysql.update('apply', row);
            return result.affectedRows === 1;
        }
    }

    return ApplyService;
};