'use strict';

const plugins = {
    mysql: {
        enable: true,
        package: 'egg-mysql',
    },
    validate: {
        enable: true,
        package: 'egg-validate',
    },
    email: {
        enable: true,
        package: 'egg-email',
    },
    auth: {
        enable: true,
        package: 'egg-auth',
    }
};

module.exports = plugins;
