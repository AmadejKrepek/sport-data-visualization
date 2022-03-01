<template>
  <Highcharts v-if="GetChartOptions != null" ref="highchartsRef" :options="GetChartOptions" />
</template>

<script>
export default {
  name: "TestChart",
  computed: {
      GetChartOptions() {
          return this.$store.getters.getChartOptions;
      }
  }
};
</script>