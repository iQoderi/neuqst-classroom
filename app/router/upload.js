"use strict";

module.exports = app => {
    app.post('/qiniu/upload', 'qiniu.upload');
};
