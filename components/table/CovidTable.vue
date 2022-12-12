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
          :items="getStatistics"
          :items-per-page="getItemsPerPage"
          :loading="getLoading"
          :server-items-length="getTotalStatistics"
          @update:sort-by="sortBy"
          @update:sort-desc="sortDesc"
          @update:page="changePage"
          @update:items-per-page="changePerPage"
          :search="search"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      search: '',
      payload: {
        order_by: 'id',
        order_direction: 'asc',
        page: 1,
        per_page: 15,
      },
      headers: this.$store.getters["statistic/getTableHeaders"],
    }
  },
  computed: {
    ...mapGetters("statistic", [
      "getStatistics",
      "getLoading",
      "getTotalStatistics",
      "getItemsPerPage"
    ]),
  },
  methods: {
    sortBy(sortBy) {
      this.payload.order_by = sortBy;
    },
    changePage(page) {
      this.payload.page = page;
      this.$store.dispatch('statistic/fetchStatistics', this.payload);
    },
    sortDesc(sortDesc) {
      this.payload.order_direction = sortDesc ? 'asc' : 'desc';
      this.$store.dispatch('statistic/fetchStatistics', this.payload);
    },
    changePerPage(perPage) {
      this.payload.per_page = perPage;
      this.$store.dispatch('statistic/fetchStatistics', this.payload)
    },
    clickSearch() {
      this.payload.search = this.search;
      this.$store.dispatch('statistic/fetchStatistics', this.payload)
    }
  },
  mounted() {
    this.$store.dispatch('statistic/fetchStatistics');
  }
}
</script>
