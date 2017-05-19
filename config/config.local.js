"use strict";

module.exports = appInfo => {
    const config = {
        version: 'v1',
        security: {
            csrf: false,
        },
        mysql: {
            client: {
                host:'127.0.0.1',
                port: 3306,
                user: 'root',
                password: 'Qoder5143209',
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
        qiniu: {
            ak: 'aqU04gUOGu9yMX6R6KS33rDLSlrrxoa4XKByqAaw',
            sk: 'g3br-F3D53huzCVD4jkFhkID0HZaX3MJjiSqkF58',
            prefix: 'neuqst-classroom-',
            buckets: [{}]
        },
        host: `http://www.dev.com/api/v1`,
        originUrl: 'http://www.dev.com',
        apiUrl: {
            resUrlPrefix: `http://s0.dev.com/static/v1`,
            appUrlPrefix: `http://www.dev.com/api/v1`,
            picUrlPrefix: `http://pic.dev.com/image/v1`
        },
    };

    return config;
};