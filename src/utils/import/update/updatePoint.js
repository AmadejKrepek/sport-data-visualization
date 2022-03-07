function UpdatePoint(chart, chartOptions, selected) {

    if (selected == 0) {        
        chart.subtitle.text = 'babica';
        //chart.series[0].addPoint(Math.random() * 100);
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
                text: 'Metrics123'
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
                data: chartOptions[0].chartOptions.series[0].data.map(x => x),  
            },
            ],
        })
    }
}

export {
    UpdatePoint
}