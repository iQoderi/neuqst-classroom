"use strict";


const fs = require('fs');
const path = require('path');
const qiniu = require('qiniu');

module.exports = {
    routerLoader() {
        const routerDir = path.join(__dirname, '../router');
        const result = fs.readdirSync(routerDir);
        result.forEach((file) => {
            const routerPath = `${routerDir}/${file}`;
            const router = require(routerPath);
            if (typeof router === 'function') {
                console.log(`router loaded: ${router}`);
                router(this);
            }
        });
    },

    libLoader() {
        const libDir = path.join('');
    },

    qiniu() {
        const m = this;
        class Qiniu {
            constructor() {
                const { ak, sk, bucket, prefix} = m.config.qiniu;
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

        return Qiniu;
    },
    mail() {

    }
};