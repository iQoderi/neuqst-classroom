"use strict";

module.exports = appInfo => {
    const config = {};

    config.security = {
        csrf: false,
    };

    return config;
};