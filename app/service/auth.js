"use strict";

module.exports = app => {
    class AuthService extends app.Service {
        async register(user) {
            const result = await this.app.mysql.insert('user', user);
            return result;
        }
    }

    return AuthService;
};
