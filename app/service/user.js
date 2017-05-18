"use strict";

module.exports = app => {
    class UserService extends app.Service {

        async findUserByMail(email) {
            const result = await this.app.mysql.get('user', { email });
            return result;
        }

        async findUserById(uid) {
            const result = await this.app.mysql.get('user', {
                where: { id: uid },
                columns: ['']
            });
            return result;
        }

        async setUserRetrieveKey(uid, key) {
            const retrieveKey  = key;
            const row = {
                id: uid,
                retrieveKey,
            };
            const result = await this.app.mysql.update('user', row);

            return  result.affectedRows === 1;
        }

        async activeUser(uid) {
            const row = {
                id: uid,
                isActive: 1,
            };
            const result = await this.app.mysql.update('user', row);

            return result;
        }

        async findUserByMailAndKey(email, retrieveKey) {
            const query = {
                email,
                retrieveKey,
            };
            const result = await this.app.mysql.get('user', query);

            return result;
        }

        async updatePass(uid, password) {
            const row = {
                id: uid,
                password,
            };
            const result = await this.app.mysql.update('user', row);
            return result.affectedRows === 1;
        }

        async checkActiveByMail (email) {
            const result = await this.app.mysql.get('user', { email });
            const isActive = result.isActive === 1;

            return isActive;
        }

    }

    return UserService;
};
