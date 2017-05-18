"use strict";

module.exports = appInfo => {
    const config = {
        security: {
            csrf: false,
        },
        mysql: {
            client: {
                host:'127.0.0.1',
                port: 3306,
                user: 'root',
                password: '1253110928',
                database: 'neuqst-classroom',
            },
            app: true,
            agent: false,
        },
        email: {
            client: {
                host: 'smtp.163.com',
                secureConnection: true,
                port: 465,
                auth: {
                    user: 'neuqstbysgl@163.com',
                    pass: 'neuqst1314',
                },
            },
            from: 'neuqstbysgl@163.com',
            name: '东北大学秦皇岛分校数统教室管理系统',
            app: true,
            agent: false,
        },
        auth: {
            password: {
                saltTime: 10,
            },
            session: {
                secrets: 'neuqst-classroom0000222333798',
            },
            app: true,
            agent: false,
        },
        host: 'http://neuqst.dev.com/api/v1/'
    };

    return config;
};