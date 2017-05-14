"use strict";

module.exports = appInfo => {
    const config = {};

    config.security = {
        csrf: false,
    };

    config.mysql = {
        client: {
            host:'127.0.0.1',
            port: 3306,
            user: 'root',
            password: 'Qoder5143209',
            database: 'neuqst-classroom',
        },
        app: true,
        agent: false,
    };

    config.email = {
        client: {
            host: 'smtp.163.com',
            secureConnection: true,
            port: 465,
            auth: {
                user: 'neuqstbysgl@163.com',
                pass: 'neuqst1314',
            }
        }
    };

    return config;
};