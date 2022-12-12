export default function ({app}) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    app.store.commit('statistic/set_locale', newLocale)
    app.store.commit('country/set_locale', newLocale)
  }
}
