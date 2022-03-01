<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-12">
          <h1 class="text-center" data-bs-toggle="modal" data-bs-target="#importDataModal" role="button">Click here to add some sports data</h1>
          <TestChart />
      </div>
    </div>
  </div>
</template>

<script>
import TestChart from '../components/Charts/TestChart.vue';

export default {
  name: 'Dashboard',
  components: {
    TestChart,
  }
}
</script>