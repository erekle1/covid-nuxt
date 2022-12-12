export const actions = {
  fetchCountries({commit}, data = {}) {
    commit('set_loading', true);
    this.$axios.get('/api/countries', {
      params: data
    }).then(res => {
      commit('set_countries', res.data)
      commit('set_loading', false)
    }).catch(() => {
      commit('set_countries', [])
      commit('set_loading', true)
    })
  },
/*  setLocale({commit}, locale) {
    commit('set_locale', locale)
  }*/
}
