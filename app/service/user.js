"use strict";

const uuid = require('uuid');

module.exports = app => {
    class UserService extends app.Service {

        async findUserByMail(email) {
            const result = await this.app.mysql.get('user', { email });
            return result;
        }

        async setUserRetrieve(uid) {
            const retrieveKey  = uuid.v4();
            const retrieveTime = new Date().getTime();
            const row = {
                id: uid,
                retrieveKey,
                retrieveTime,
            };
            const result = await this.app.mysql.update('user', row);

            return result;
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
