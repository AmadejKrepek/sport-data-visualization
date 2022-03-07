<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-12 mb-4" v-if="GetSportData == null">
          <h1 class="text-center bg-secondary p-2" data-bs-toggle="modal" data-bs-target="#importDataModal" role="button">Click here to add some sports data</h1>
      </div>
      <div class="col-12 col-xl-12 mb-4" v-if="GetWeatherData.length > 0">
        <StartWeather caption="Start Weather Conditions" :weatherData="GetWeatherData[0]" />
      </div>
      <div class="col-12 col-xl-4">
        <IntegralMetric />
      </div>
      <div class="col-12 col-xl-8">
        <MyChart />
      </div>
      <div class="col-12 col-xl-12 mb-4" v-if="GetWeatherData.length > 0">
        <StartWeather caption="End Weather Conditions" :weatherData="GetWeatherData[GetWeatherData.length - 1]" />
      </div>
    </div>
  </div>
</template>

<script>
import MyChart from '../components/Charts/MyChart.vue';
import IntegralMetric from '../components/Table/Integral/IntegralMetrics.vue';
import StartWeather from '../components/Weather/Short/Weather.vue';

export default {
  name: 'Dashboard',
  components: {
    MyChart,
    IntegralMetric,
    StartWeather
  },
  computed: {
    GetWeatherData() {
        return this.$store.getters.getWeatherData;
    },
    GetSportData() {
      return this.$store.getters.getSportData;
    }
  },
    
}
</script>