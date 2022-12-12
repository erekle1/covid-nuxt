<template>
  <div>
    <h1>Statistic Summary</h1>
    <v-row class="mt-5">
      <v-col>
        <stat-card :data="getStatisticSummary.death" title="Deaths"/>
      </v-col>
      <v-col>
        <stat-card :data="getStatisticSummary.confirmed" title="Confirmed"/>
      </v-col>
      <v-col>
        <stat-card :data="getStatisticSummary.recovered" title="Recovered"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import StatCard from "../../components/cards/StatCard";
import {mapGetters} from "vuex";

export default {
  components: {StatCard},
  middleware: 'authenticated',
  name: 'IndexPage',
  computed: {
    ...mapGetters("statistic", [
      "getStatisticSummary",
      "getLoading"
    ]),
  },
  mounted() {
    this.$store.dispatch('statistic/fetchStatistics')
  }
}
</script>
