<template>
  <v-card
    max-width="344">
    <v-card-text>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ data }}
      </v-card-text>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>
