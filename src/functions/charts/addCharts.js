import { ChartData } from '../../object/Chart/ChartData';
import { getAltitudeChart, getDistanceChart, getHeartChart, getSpeedChart } from '../charts/types/getAltitudeChart';

function addCharts(filteredData) {
    let arrayOfCharts = [];

    var altitudeChart = new ChartData();
    var distanceChart = new ChartData();
    var heartChart = new ChartData();
    var speedChart = new ChartData();

    altitudeChart = getAltitudeChart(altitudeChart, filteredData);
    distanceChart = getDistanceChart(distanceChart, filteredData);
    heartChart = getHeartChart(heartChart, filteredData);
    speedChart = getSpeedChart(speedChart, filteredData);

    arrayOfCharts.push(altitudeChart);
    arrayOfCharts.push(distanceChart);
    arrayOfCharts.push(heartChart);
    arrayOfCharts.push(speedChart);

    return arrayOfCharts;
}

export {
    addCharts
}