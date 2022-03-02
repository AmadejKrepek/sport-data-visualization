<template>
  <div v-if="GetChartOptions != null">
    <button class="btn btn-primary m-1" @click="UpdateAltitude($refs.highchart.chart, GetChartOptions)">Altitude</button>
    <button class="btn btn-primary m-1" @click="UpdateDistance($refs.highchart.chart, GetChartOptions)">Distance</button>
    <button class="btn btn-primary m-1" @click="UpdateHeartRate($refs.highchart.chart, GetChartOptions)">Heart Rate</button>
    <button class="btn btn-primary m-1" @click="UpdateSpeed($refs.highchart.chart, GetChartOptions)">Speed</button>
    <Highcharts ref="highchart" :options="GetChartOptions[0].chartOptions" />
  </div>
</template>

<script>
import { UpdateAltitude, UpdateDistance, UpdateHeartRate, UpdateSpeed } from '../../functions/charts/update/updateCharts';

export default {
  name: "MyChart",
  methods: {
    UpdateAltitude,
    UpdateDistance,
    UpdateHeartRate,
    UpdateSpeed
  },
  computed: {
    GetChartOptions() {
         return this.$store.getters.getChartOptions;
    }
  },
};
</script>