import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import MainEnResource from './app/MainEn.Resource.json'
import MainJaResource from './app/MainJa.Resource.json'
import CatEnResource from './app/cat/CatEn.Resource.json'
import CatJaResource from './app/cat/CatJa.Resource.json'

const resources = {
  en: {
    translation: {
      ...MainEnResource,
      ...CatEnResource,
    },
  },
  ja: {
    translation: {
      ...MainJaResource,
      ...CatJaResource,
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
