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

module.exports = plugins;
