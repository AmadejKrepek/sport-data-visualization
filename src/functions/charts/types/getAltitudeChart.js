import moment from 'moment';
import { tooltipFormater, labelsFormatter, scaleYAxis } from '../../../utils/chart/chartOptions';

function getAltitudeChart(altitudeChart, filteredData) {
    altitudeChart.chartOptions.series[0].data = filteredData.altitudes.map(x => Math.floor(x * 100) / 100);
    altitudeChart.chartOptions.xAxis.categories = filteredData.timestamps.map(x => moment(x));
    altitudeChart.chartOptions.xAxis.labels = labelsFormatter;
    altitudeChart.chartOptions.tooltip = tooltipFormater;
    altitudeChart.chartOptions.yAxis = scaleYAxis("Altitude (m)");
    return altitudeChart;
}

function getDistanceChart(distanceChart, filteredData) {
    distanceChart.chartOptions.chart.type = 'line';
    distanceChart.chartOptions.series[0].data = filteredData.distances.map(x => (Math.floor((x / 1000) * 100) / 100) );
    distanceChart.chartOptions.xAxis.categories = filteredData.timestamps.map(x => moment(x));
    distanceChart.chartOptions.xAxis.labels = labelsFormatter;
    distanceChart.chartOptions.tooltip = tooltipFormater;
    distanceChart.chartOptions.yAxis = scaleYAxis("Distance (km)");
    return distanceChart;
}

function getHeartChart(heartChart, filteredData) {
    heartChart.chartOptions.chart.type = 'line';
    heartChart.chartOptions.series[0].data = filteredData.heartrates.map(x => Math.floor(x * 100) / 100);
    heartChart.chartOptions.xAxis.categories = filteredData.timestamps.map(x => moment(x));
    heartChart.chartOptions.xAxis.labels = labelsFormatter;
    heartChart.chartOptions.tooltip = tooltipFormater;
    heartChart.chartOptions.yAxis = scaleYAxis("Heart Rate (bpm)");
    return heartChart;
}

function getSpeedChart(speedChart, filteredData) {
    speedChart.chartOptions.chart.type = 'line';
    speedChart.chartOptions.series[0].data = filteredData.speeds.map(x => Math.floor(x * 100) / 100);
    speedChart.chartOptions.xAxis.categories = filteredData.timestamps.map(x => moment(x));
    speedChart.chartOptions.xAxis.labels = labelsFormatter;
    speedChart.chartOptions.tooltip = tooltipFormater;
    speedChart.chartOptions.yAxis = scaleYAxis("Speed (km)");
    return speedChart;
}

export {
    getAltitudeChart,
    getDistanceChart,
    getHeartChart,
    getSpeedChart
}