'use strict';

module.exports = appInfo => {
  const config = {
    view: {
        defaultViewEngine: 'nunjucks',
        mapping: {
          '.tpl': 'nunjucks'
        },
    },
    keys: appInfo.name + '_1494245470526_4357',
  };

  return config;
};

