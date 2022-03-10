<template>
<div class="container-fluid" v-if="GetRealTime != null">
    <div class="row">
         <div class="col-12 col-xl-12">
            <Weather :caption="'Last weather'" :weatherData="GetRealTime.weather[GetRealTime.weather.length-1]" />
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-xl-12">
            <RealtimeChart />
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-xl-12">
            <QuickStats />
        </div>
    </div>
</div>
</template>

<script>
import RealtimeChart from './RealtimeChart.vue';
import Weather from '../Weather/Short/Weather.vue';
import QuickStats from '../Realtime/Widget/QuickStats.vue';

export default {
    components: {
        RealtimeChart,
        Weather,
        QuickStats
    },
    computed: {
        GetRealTime() {
            return this.$store.getters.getRealTime;
        },
    }
}
</script>