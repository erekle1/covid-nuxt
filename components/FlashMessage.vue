<template>
  <v-snackbar
    v-model="show"
    :timeout="timeout">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "FlashMessage",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      required: true,
    },
    timeout: {
      type: Number,
      default: 2000
    }
  }
}
</script>

<style scoped>

</style>
