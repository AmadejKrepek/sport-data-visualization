function UpdatePoint(chart, selected, responseData) {
    if (selected == 0) {
        //chart.series[0].addPoint(randomDoubleFromInterval(50, 800), true); For random interval
        chart.series[0].addPoint([responseData.timestamps[responseData.timestamps.length-1], responseData.altitudes[responseData.altitudes.length-1]], true, true);
    }
    else if (selected == 1) {
        chart.series[0].addPoint([responseData.timestamps[responseData.timestamps.length-1], responseData.distances[responseData.distances.length-1]], true, true);
        // second true is for removing first point
        //chart.series[0].addPoint(randomDoubleFromInterval(2, 5), true); For random interval
    }
    else if (selected == 2) {
        chart.series[0].addPoint([responseData.timestamps[responseData.timestamps.length-1], responseData.heartrates[responseData.heartrates.length-1]], true, true);
        //chart.series[0].addPoint(randomDoubleFromInterval(80, 120), true); For random interval
    }
    else if (selected == 3) {
        chart.series[0].addPoint([responseData.timestamps[responseData.timestamps.length-1], responseData.speeds[responseData.speeds.length-1]], true, true);
        //chart.series[0].addPoint(randomDoubleFromInterval(1, 40), true); For random interval
    }
    
}

export {
    UpdatePoint
}