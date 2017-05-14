"use strict";
module.exports = () => {
    return async function errorHandler(next) {
        try {
            next();
        } catch (e) {
            this.app.emit('error', err, this);
            this.body = {
                success: false,
                message: this.app.config.env === 'prod' ? 'Internal Server Error' : err.message,
            };
        }
    }
};