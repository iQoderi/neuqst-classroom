"use strict";

module.exports = app => {
    const fs = require('fs');
    const path = require('path');

    const routerDir = path.join(__dirname, '../router');
    const result = fs.readdirSync(routerDir);
    result.forEach((file) => {
        const routerPath = `${routerDir}/${file}`;
        const router = require(routerPath);
        if (typeof router === 'function') {
            console.log(`router loaded: ${router}`);
            router(app);
        }
    });
};