'use strict';

module.exports = appInfo => {
  const config = {
    view: {
        defaultViewEngine: 'nunjucks',
        mapping: {
          '.html': 'nunjucks'
        },
    },
    middleware: ['errorPage'],
    keys: appInfo.name + '_1494245470526_4357',
  };

  return config;
};

