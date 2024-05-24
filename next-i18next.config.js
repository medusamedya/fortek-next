const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', "es"], 
  },
  localePath: path.resolve('./public/locales'),
};