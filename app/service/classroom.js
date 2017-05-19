"use strict";

module.exports = app => {
    class ClassroomService extends app.Service {
        async list() {
            const result = await this.app.mysql.select('classroom');
            console.log(result)
            return result;
        }

    }

    return ClassroomService;
};