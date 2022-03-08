import { randomDoubleFromInterval } from "../../random/randomNumber";

function UpdatePoint(chart, chartOptions, selected) {

    if (selected == 0) {
        chart.series[0].addPoint(randomDoubleFromInterval(50, 800), true);
    }
    else if (selected == 1) {
        chart.series[0].addPoint(randomDoubleFromInterval(2, 5), true);
    }
    else if (selected == 2) {
        chart.series[0].addPoint(randomDoubleFromInterval(80, 120), true);
    }
    else if (selected == 3) {
        chart.series[0].addPoint(randomDoubleFromInterval(1, 40), true);
    }
}

export {
    UpdatePoint
}