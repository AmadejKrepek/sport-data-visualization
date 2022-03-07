<template>
    <div v-if="GetRealTimeChartOptions != null">
        <div>
            <button class="btn btn-primary m-1" @click="UpdateAltitude($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(0)">Altitude</button>
            <button class="btn btn-primary m-1" @click="UpdateDistance($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(1)">Distance</button>
            <button class="btn btn-primary m-1" @click="UpdateHeartRate($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(2)">Heart Rate</button>
            <button class="btn btn-primary m-1" @click="UpdateSpeed($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(3)">Speed</button>
        </div>
        <Highcharts ref="realTimeChart" :options="GetRealTimeChartOptions[0].chartOptions"  />
    </div>
</template>

<script>
import { UpdateAltitude, UpdateDistance, UpdateHeartRate, UpdateSpeed } from '../../functions/charts/update/updateCharts';

export default {
    data() {
        return {
            polling: null,
        }
    },
    methods: {
        UpdateAltitude,
        UpdateDistance,
        UpdateHeartRate,
        UpdateSpeed,
        pollData () {
		this.polling = setInterval(() => {

            this.$store.dispatch('getRealTimeChartPoint', this.$refs.realTimeChart.chart)

            }, 5000)
	},
    SelectedChart(num) {
        this.$store.dispatch('setChart', num);
    }
    },
    beforeUnmount () {
	clearInterval(this.polling)
    },
    created () {
    this.pollData()
    },  
    computed: {
        GetRealTime() {
            return this.$store.getters.getRealTime;
        },
        GetRealTimeChartOptions() {
            return this.$store.getters.getRealTimeChartOptions;
        }
    }
}
</script>