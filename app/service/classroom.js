"use strict";

module.exports = app => {
    class ClassroomService extends app.Service {
        async list() {
            const result = await this.app.mysql.select('classroom');
            return result;
        }

        async detail(id) {
            const result = await this.app.mysql.get('classroom', { id });
            return result;
        }

        async update(row) {
            const result = await this.app.mysql.update('classroom', row);
            return result.affectedRows === 1;
        }

        async create(row) {
            const result = await this.app.mysql.insert('classroom', row);
            console.log(result, 'ret');
            return result.affectedRows === 1;
        }

        async remove(id) {
            const result = await this.app.mysql.delete('classroom', { id });
            return result.affectedRows === 1;
        }
    }

    return ClassroomService;
};
