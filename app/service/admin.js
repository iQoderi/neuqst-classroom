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

        async create(admin) {
            const result = await this.app.mysql.insert('user', admin);
            return result.affectedRows === 1
        }

        async remove (id) {
            const result = await this.app.mysql.delete('user', { id });
            return result.affectedRows === 1
        }

        async update (row) {
            const result = await this.app.mysql.update('user', row);
            return result.affectedRows === 1
        }

        async detail(id) {
            const query = {
                id,
                role: 3,
            };
            const result = await this.app.mysql.get('user', query);
            this.ctx.helper.dropField(result, ['password', 'token', 'retrieveKey']);
            return result;
        }
    }

    return AdminService;
};
