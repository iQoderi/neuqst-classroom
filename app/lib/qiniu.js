"use strict";

const qiniu = require('qiniu');

class Qiniu {
    constructor(cfg) {
        const { ak, sk, bucket, prefix} = cfg;
        qiniu.conf.ACCESS_KEY = ak;
        qiniu.conf.SECRET_KEY = sk;
        this.bucket = bucket;
        this.prefix = prefix;
    }

    upToken(bucket, key) {
        const putPolicy = new qiniu.rs.PutPolicy(`${bucket}:${key}`);
        return putPolicy.token();
    }

    async uploadFile(key, file) {
        const extra = new qiniu.io.PutExtra();
        const newKey = `${this.prefix}/${key}`;
        const token = this.upToken(this.bucket, newKey);
        const result = await new Promise((resolve, reject) => {
            if (Buffer.isBuffer(file)) {
                qiniu.io.put(token, newKey, file, extra, (err, ret) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(ret);
                    }
                });
            } else {
                qiniu.io.putFile(token, newKey, file, extra, (err, ret) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(ret);
                    }
                });
            }
        });

        return result;
    }
}

module.exports = Qiniu;
