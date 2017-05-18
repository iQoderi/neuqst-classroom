'use strict';

module.exports = appInfo => {
  const config = {
    view: {
        defaultViewEngine: 'nunjucks',
        mapping: {
          '.html': 'nunjucks'
        },
    },
    keys: appInfo.name + '_1494245470526_4357',
  };

  return config;
};

