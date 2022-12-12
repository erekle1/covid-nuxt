<template>
  <country-table />
</template>

<script>
import CountryTable from "../../components/table/CountryTable";

export default {
  middleware: 'authenticated',
  components: {CountryTable},
  name: 'IndexPage',
}
</script>
