import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { default as nextI18NextConfig } from '../next-i18next.config';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ...nextI18NextConfig.i18n,
    lng: nextI18NextConfig.i18n.defaultLocale,
    fallbackLng: nextI18NextConfig.i18n.defaultLocale,
    resources: {
      en: {
        home: require('../public/locales/en/home.json'),
        service: require('../public/locales/en/service.json'),
        two_way_damper: require('../public/locales/en/two-way-damper.json'),
        three_way_damper: require('../public/locales/en/three-way-damper.json'),
        guillotine_damper: require('../public/locales/en/guillotine-damper.json'),
        multi_damper: require('../public/locales/en/multi-damper.json'),
        sealing_damper: require('../public/locales/en/sealing-damper.json'),
        certi: require('../public/locales/en/certi.json'),
        blog_1: require('../public/locales/en/blog-1.json'),
        blog_2: require('../public/locales/en/blog-2.json'),
        blog_3: require('../public/locales/en/blog-3.json'),
        common: require('../public/locales/en/common.json'),
        products: require('../public/locales/en/products.json'),
        contact: require('../public/locales/en/contact.json'),
      },
      tr: {
        home: require('../public/locales/tr/home.json'),
        service: require('../public/locales/tr/service.json'),
        two_way_damper: require('../public/locales/tr/two-way-damper.json'),
        three_way_damper: require('../public/locales/tr/three-way-damper.json'),
        guillotine_damper: require('../public/locales/tr/guillotine-damper.json'),
        multi_damper: require('../public/locales/tr/multi-damper.json'),
        sealing_damper: require('../public/locales/tr/sealing-damper.json'),
        certi: require('../public/locales/tr/certi.json'),
        blog_1: require('../public/locales/tr/blog-1.json'),
        blog_2: require('../public/locales/tr/blog-2.json'),
        blog_3: require('../public/locales/tr/blog-3.json'),
        common: require('../public/locales/tr/common.json'),
        products: require('../public/locales/tr/products.json'),
        contact: require('../public/locales/tr/contact.json'),


      },
      es: {
        home: require('../public/locales/es/home.json'),
        service: require('../public/locales/es/service.json'),
        two_way_damper: require('../public/locales/es/two-way-damper.json'),
        three_way_damper: require('../public/locales/es/three-way-damper.json'),
        guillotine_damper: require('../public/locales/es/guillotine-damper.json'),
        multi_damper: require('../public/locales/es/multi-damper.json'),
        sealing_damper: require('../public/locales/es/sealing-damper.json'),
        certi: require('../public/locales/es/certi.json'),
        blog_1: require('../public/locales/es/blog-1.json'),
        blog_2: require('../public/locales/es/blog-2.json'),
        blog_3: require('../public/locales/es/blog-3.json'),
        common: require('../public/locales/es/common.json'),
        products: require('../public/locales/es/products.json'),
        contact: require('../public/locales/es/contact.json'),
      }
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
