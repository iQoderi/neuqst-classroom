"use strict";

module.exports = app => {
    class AdminService extends app.Service {
        async list () {
            const result = await this.app.mysql.get('user', { role: 3 });
            return result;
        }
    }

    return AdminService;
};
