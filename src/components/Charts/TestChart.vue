<template>
  <Highcharts ref="highchartsRef" :options="GetChartOptions"></Highcharts>
</template>

<script>
export default {
  name: "TestChart",
  data() {
      return {
          options: null
      }
  },
  computed: {
      GetChartOptions() {
          return this.$store.getters.getChartOptions;
      }
  }
};
</script>