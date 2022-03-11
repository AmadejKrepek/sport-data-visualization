function UpdateAltitude(chart, GetChartOptions) {
    chart.showLoading("Loading data...");
    chart.update({
        chart: {
            type: 'area',
            zoomType: 'x',
        },
        title: {
            text: "Altitude",
            x: -20, //center
        },
        subtitle: {
            text: 'Metrics'
        },
        xAxis: {
            categories: GetChartOptions[0].chartOptions.xAxis.categories.map(x => x),
            tickInterval: 100,
        },
        yAxis: {
            title: {
                text: 'Altitude (m)'
            }
        },
        series: [
        {
            name: "Athlete",
            color: 'green',
            data: GetChartOptions[0].chartOptions.series[0].data.map(x => x),
        },
        ],
    })
    chart.hideLoading();
}

function UpdateDistance(chart, GetChartOptions) {
    chart.update({
        chart: {
            type: 'line',
            zoomType: 'x',
            events: {
                load() {
                    this.showLoading();
                  }
            }
        },
        title: {
            text: "Distance",
            x: -20, //center
        },
        subtitle: {
            text: 'Metrics'
        },
        xAxis: {
            categories: GetChartOptions[0].chartOptions.xAxis.categories.map(x => x)
        },
        yAxis: {
            title: {
                text: 'Distance (km)'
            }
        },
        series: [
        {
            name: "Athlete",
            color: 'orange',
            data: GetChartOptions[1].chartOptions.series[0].data.map(x => x),
        },
        ],
    })
}

function UpdateHeartRate(chart, GetChartOptions) {
    chart.update({
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        title: {
            text: "Heart Rate",
            x: -20, //center
        },
        subtitle: {
            text: 'Metrics'
        },
        xAxis: {
            categories: GetChartOptions[0].chartOptions.xAxis.categories.map(x => x)
        },
        yAxis: {
            title: {
                text: 'Heart Rate (bpm)'
            }
        },
        series: [
        {
            name: "Athlete",
            color: 'red',
            data: GetChartOptions[2].chartOptions.series[0].data.map(x => x),
        },
        ],
    })
}

function UpdateSpeed(chart, GetChartOptions) {
    chart.update({
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        title: {
            text: "Speed",
            x: -20, //center
        },
        subtitle: {
            text: 'Metrics'
        },
        xAxis: {
            categories: GetChartOptions[0].chartOptions.xAxis.categories.map(x => x)
        },
        yAxis: {
            title: {
                text: 'Speed (km)'
            }
        },
        series: [
        {
            name: "Athlete",
            color: 'blue',
            data: GetChartOptions[3].chartOptions.series[0].data.map(x => x),
        },
        ],
    })
}

export {
    UpdateAltitude,
    UpdateDistance,
    UpdateHeartRate,
    UpdateSpeed
}