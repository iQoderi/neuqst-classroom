"use strict";

module.exports = app => {
    class AuthService extends app.Service {
        async userExist (opt) {
            const result = await this.app.mysql.get('user', opt);
            return result;
        }

        async register(user) {
            const result = await this.app.mysql.insert('user', user);
            const insertSuccess = result.affectedRows === 1;
            return insertSuccess;
        }

        async login(query) {
            const result = await this.app.mysql.select('user', query);
            return result;
        }

        async saveToken(uid, token) {
            const row = {
                id: uid,
                token,
            };
            const result = await this.app.mysql.update('user', row);

            return result;
        }

    }

    return AuthService;
};
