'use strict';

// npm run dev DO NOT read this file

console.log('NODE_ENV', process.env.NODE_ENV);
require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 7001, // default to 7001
});

