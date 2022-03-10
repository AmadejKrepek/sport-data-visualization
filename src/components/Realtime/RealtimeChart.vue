<template>
    <div v-if="GetRealTimeChartOptions != null">
        {{GetNumSelectedStats}}
        <div>
            <button class="btn btn-primary m-1" @click="UpdateAltitude($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(0), ShowChart()">Altitude</button>
            <button class="btn btn-primary m-1" @click="UpdateDistance($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(1), ShowChart()">Distance</button>
            <button class="btn btn-primary m-1" @click="UpdateHeartRate($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(2), ShowChart()">Heart Rate</button>
            <button class="btn btn-primary m-1" @click="UpdateSpeed($refs.realTimeChart.chart, GetRealTimeChartOptions), SelectedChart(3), ShowChart()">Speed</button>
        </div>
        <Highcharts ref="realTimeChart" :options="defaultChartOptions" :class="visibility" />
    </div>
    <div v-if="GetNumSelectedChart == null || !GetSelectedStats" class="text-center">
        <h3 class="text-center">Select Chart</h3>
        <fa icon="chart-column" class="chart-symbol mt-5" id="temperature"></fa>
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
            visibility: 'd-none',
            selectedTemp: false
        }
    },
    methods: {
        UpdateAltitude,
        UpdateDistance,
        UpdateHeartRate,
        UpdateSpeed,
        pollData () {
		this.polling = setInterval(() => {

            this.$store.dispatch('getRealTime');
            if (this.$refs.realTimeChart.chart != undefined || this.$refs.realTimeChart.chart != null) {
                this.$store.dispatch('getRealTimeChartPoint', this.$refs.realTimeChart.chart)
            }

            }, 1000)
        },
        SelectedChart(num) {
            this.$store.dispatch('setChart', num);
            this.selectedTemp = true;
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
        },
        GetSelectedStats() {
            return this.$store.getters.getSelectedStats;
        }
    }
}
</script>

<style scoped>
.chart-symbol {
    font-size: 120px;
    color: rgb(63, 121, 101);
}
</style>