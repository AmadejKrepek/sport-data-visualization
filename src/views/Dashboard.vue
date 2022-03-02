<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-12 mb-4">
          <h1 class="text-center bg-secondary p-2" data-bs-toggle="modal" data-bs-target="#importDataModal" role="button">Click here to add some sports data</h1>
      </div>
      <div class="col-12 col-xl-12 mb-4">
        <StartWeather caption="Start Weather Conditions" />
      </div>
      <div class="col-12 col-xl-4">
        <IntegralMetric />
      </div>
      <div class="col-12 col-xl-8">
        <MyChart />
      </div>
      <div class="col-12 col-xl-12 mb-4">
        <StartWeather caption="End Weather Conditions" />
      </div>
    </div>
  </div>
</template>

<script>
import MyChart from '../components/Charts/MyChart.vue';
import IntegralMetric from '../components/Table/Integral/IntegralMetrics.vue';
import StartWeather from '../components/Weather/Short/StartWeather.vue';

export default {
  name: 'Dashboard',
  components: {
    MyChart,
    IntegralMetric,
    StartWeather
  }
}
</script>