'use strict';

const plugins = {};

plugins.mysql = {
    enable: true,
    package: 'egg-mysql'
};

plugins.validate = {
    enable: true,
    package: 'egg-validate',
};

plugins.email = {
    enable: true,
    package: 'egg-email',
};

module.exports = plugins;
