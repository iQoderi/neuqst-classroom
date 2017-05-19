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
    }

    return ClassroomService;
};