'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {
      view: {
          defaultViewEngine: 'nunjucks',
          mapping: {
            '.html': 'nunjucks'
          },
      },
      middleware: ['errorHandler','errorPage', 'overloadRender'],
      static: {
          prefix: '/public/',
          dir: path.join(appInfo.baseDir, 'app/public'),
          // support lazy load
          dynamic: true,
          preload: false,
          buffer: false,
      },
      keys: appInfo.name + '_1494245470526_4357',
  };

  return config;
};

