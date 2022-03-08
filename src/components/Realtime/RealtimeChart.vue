<template>
    <div v-if="GetRealTimeChartOptions != null">
        <div>
            <button class="btn btn-primary m-1" @click="UpdateAltitude($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(0), ShowChart()">Altitude</button>
            <button class="btn btn-primary m-1" @click="UpdateDistance($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(1), ShowChart()">Distance</button>
            <button class="btn btn-primary m-1" @click="UpdateHeartRate($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(2), ShowChart()">Heart Rate</button>
            <button class="btn btn-primary m-1" @click="UpdateSpeed($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(3), ShowChart()">Speed</button>
        </div>
        <Highcharts ref="realTimeChart" :options="defaultChartOptions" :class="visibility" />
    </div>
</template>

<script>
import { chartOptions } from '../../utils/chart/chartOptions';
import { UpdateAltitude, UpdateDistance, UpdateHeartRate, UpdateSpeed } from '../../functions/charts/update/updateCharts';

export default {
    data() {
        return {
            polling: null,
            defaultChartOptions: chartOptions,
            visibility: 'd-none'
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

            }, 1000)
	},
        SelectedChart(num) {
            this.$store.dispatch('setChart', num);
        },
        ShowChart() {
            this.visibility = 'd-block'
        },
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
        },
        GetNumSelectedChart() {
         return this.$store.getters.getNumSelectedChart;
    }
    }
}
</script>