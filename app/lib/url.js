"use strict";

module.exports = function () {
    const { apiUrl } = this.config;
    return {
        res(url) {
            return `${apiUrl.resUrlPrefix}/${url}`;
        },
        app(url) {
            return `${apiUrl.appUrlPrefix}/${url}`;
        },
        pic(url) {
            return `${apiUrl.picUrlPrefix}/${url}`;
        },
    }
};