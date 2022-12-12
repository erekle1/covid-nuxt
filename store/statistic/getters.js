export const getters = {

  getStatisticSummary: (state)=>{
    return state.statistics_summary;
  },

  getLoading(state) {
    return state.loading;
  }
}
