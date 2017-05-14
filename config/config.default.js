'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1494245470526_4357';
  config.middleware =  ['userExist'];
  return config;
};

