<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-12 mb-4 text-center" v-if="GetSportData == null" data-bs-toggle="modal" data-bs-target="#importDataModal" role="button">
          <h1 class="p-2" >Click here to add some sports data</h1>
          <fa icon="folder-plus" class="folder-symbol" id="temperature"></fa>
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
    <div class="row" v-if="GetSportData != null">
      <div class="col-12">
        <span v-if="GetHillImage == null" class="fw-bold">Generating hill identification image...</span>
        <img :src="GetHillImage" alt="hill_image" v-else>
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
    },
    GetHillImage() {
      return this.$store.getters.getHillImage;
    }
  },
    
}
</script>

<style scoped>
.folder-symbol {
  font-size: 200px;
  color: rgb(44, 157, 172);
}
</style>