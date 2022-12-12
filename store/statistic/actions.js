export const actions = {
  fetchStatistics({commit}, data = {}) {
    commit('set_loading', true);
    this.$axios.get('/api/statistics/summary', {
      params: data
    }).then(res => {
      commit('set_statistics_summary', res.data)
      commit('set_loading', false)
    }).catch(() => {
      commit('set_loading', true)
    })
  },
}
