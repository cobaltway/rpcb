import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const numberFormats = {
  en: { currency: { style: 'decimal' } },
  fr: { currency: { style: 'decimal' } }
};

const dateTimeFormats = {
  en: {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  fr: {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  }
};

export default ({ app }) => {
  const i18n = new VueI18n({
    fallbackLocale: 'fr',
    messages: {
      en: require('../translations/en.js'),
      fr: require('../translations/fr.js')
    },
    locale: 'en',
    numberFormats,
    dateTimeFormats
  });
  app.i18n = i18n;
  Vue.i18nInstance = i18n;
};
