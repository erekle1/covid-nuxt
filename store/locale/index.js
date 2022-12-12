export default {
  namespaced: true,
  mutations: {
    set_locale(state) {
      state.locale = this.$i18n.locale
    }
  },
  state: () => {
    return {
      locale: 'en'
    }
  },

}
