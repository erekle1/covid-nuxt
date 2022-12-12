export const state = () => {
  return {
    countries: {
      data: [],
      meta: {
        total: 0,
        per_page: 0
      }
    },
    locale: 'en',
    loading: true,
    headers: [
      {text: 'ID', value: 'id', sortable: false},
      {
        text: 'Country',
        value: 'country_name',
        sortable: false,
      },

      {text: 'Code', value: 'code', sortable: false,},
    ],

    subHeaders: [
      {text: 'Confirmed', value: 'confirmed'},
      {text: 'Death', value: 'death'},
      {text: 'Recovered', value: 'recovered'},
    ],

    error: 0
  }
}
