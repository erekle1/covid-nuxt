export const getters = {

  getCountries: (state) => {
    let result = [...state.countries.data];
    result.forEach(item => {
      item.country_name = JSON.parse(item.country)[state.locale];
    });
    return result;
  },

  getTableHeaders(state) {
    return state.headers;
  },
  getSubHeaders(state) {
    return state.subHeaders;
  },

  getTotalCountries(state) {
    return state.countries.meta.total
  },

  getStatistics: (state) => (id) => {
    return state.countries.find(country => country.id === id).statistics
  },
  getItemsPerPage(state) {
    return parseInt(state.countries.meta.per_page)
  },

  getLoading(state) {
    return state.loading;
  }
}
