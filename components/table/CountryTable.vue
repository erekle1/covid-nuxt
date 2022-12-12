<template>
  <div>
    <v-row>
      <v-col>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details></v-text-field>
      </v-col>
      <v-col>
        <v-btn
          elevation="2"
          @click="clickSearch"
          class="mt-4"
        >Search
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="getCountries"
          :items-per-page="getItemsPerPage"
          :loading="getLoading"
          :server-items-length="getTotalCountries"
          @update:sort-by="sortBy"
          @update:sort-desc="sortDesc"
          @update:page="changePage"
          @update:items-per-page="changePerPage"
          :search="search"
          :expanded.sync="expanded"
          single-expand
          show-expand
          class="elevation-1">
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-data-table
                :headers="subheaders"
                :items="item.statistics"

              ></v-data-table>
            </td>
          </template>
        </v-data-table>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CountryTable",
  data() {
    return {
      search: '',
      expanded: [],
      active_country_id:1,
      payload: {
        order_by: 'id',
        order_direction: 'asc',
        page: 1,
        per_page: 15,
      },
      headers: this.$store.getters["country/getTableHeaders"],
      subheaders: this.$store.getters["country/getSubHeaders"],
    }
  },
  computed: {
    ...mapGetters("country", [
      "getCountries",
      "getStatistics",
      "getLoading",
      "getTotalCountries",
      "getItemsPerPage"
    ]),
  },
  methods: {
    sortBy(sortBy) {
      this.payload.order_by = sortBy;
    },
    changePage(page) {
      this.payload.page = page;
      this.$store.dispatch('country/fetchCountries', this.payload);
    },
    sortDesc(sortDesc) {
      this.payload.order_direction = sortDesc ? 'asc' : 'desc';
      this.$store.dispatch('country/fetchCountries', this.payload);
    },
    changePerPage(perPage) {
      this.payload.per_page = perPage;
      this.$store.dispatch('country/fetchCountries', this.payload)
    },
    clickSearch() {
      this.payload.search = this.search;
      this.$store.dispatch('country/fetchCountries', this.payload)
    }
  },
  mounted() {
    this.$store.dispatch('country/fetchCountries');
  }
}
</script>
