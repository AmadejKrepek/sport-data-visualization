<template>
  <div v-if="GetChartOptions != null">
    <button class="btn btn-primary">Altitude</button>
    <button class="btn btn-primary">Distance</button>
    <button class="btn btn-primary">Heart Rate</button>
    <button class="btn btn-primary">Speed</button>
    <Highcharts ref="highchart" :options="item.chartOptions" v-for="item in GetChartOptions" :key="item" />
  </div>
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