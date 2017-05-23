"use strict";

module.exports = app => {
    class AdminService extends app.Service {
        async list () {
            const result = await this.app.mysql.select('user',{
                where: { role: 3 },
                columns: [ 'id', 'name', 'email', 'role', 'college', 'major', 'class', 'code', 'isActive'],
            });
            return result;
        }

        async detail(id) {
            const query = {
                id,
                role: 3,
            };
            const result = await this.app.mysql.get('user', query);
            return result;
        }
    }

    return AdminService;
};
