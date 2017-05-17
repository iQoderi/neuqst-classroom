"use strict";

module.exports = app => {
    class UserService extends app.Service {

        async findUserByMail(email) {
            const result = await this.app.mysql.get('user', { email });
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

        async checkActiveByMail (email) {
            const result = await this.app.mysql.get('user', { email });
            const isActive = result.isActive === 1;

            return isActive;
        }

    }

    return UserService;
};
