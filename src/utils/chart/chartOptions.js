import $ from 'jquery';
import moment from 'moment';

var tooltipFormater = {
    formatter: function() {
      var s = '<b>'+ moment(this.x).format('DD.MM.YYYY HH:mm:ss') +'</b>';

      $.each(this.points, function(i, point) {
              s += '<br/><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ': ' + '<b>' + point.y + '</b>';
      });

      return s;
      },
    shared: true
}

var labelsFormatter = {
  formatter: function () {
    return moment(String(this.value)).format('HH:mm');
  }
}

function scaleYAxis(distanceText) {
  var options = {
    title: {
      text: distanceText,
    },
    tickPositioner: function () {
      var positions = [],
          tick = Math.floor(this.dataMin),
          increment = Math.ceil((this.dataMax - this.dataMin) / 15);

      if (this.dataMax !== null && this.dataMin !== null) {
          for (tick; tick - increment <= this.dataMax; tick += increment) {
              positions.push(tick);
          }
      }
      return positions;
    },
    plotLines: [
      {
        value: 0,
        width: 1,
      },
    ],
    min: 0,
    tickInterval: 100
  }
  return options;
}

const chartOptions = {
  chart: {
    type: 'area',
    zoomType: 'x',
    events: {
      
    }
  },
  title: {
    text: "",
    x: -20, //center
  },
  subtitle: {
    text: "",
    x: -20,
  },
  xAxis: {
    categories: [],
    tickInterval: 100,
    labels: {
      labelsFormatter
    }
  },
  yAxis: {

  },
  plotOptions: {
    series: {
        connectNulls: true
    },
    area: {
        fillColor: 'green'
    }
  },
  tooltip: {
    valueSuffix: " km",
    tooltipFormater
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    borderWidth: 0,
  },
  responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
            },
            yAxis: {
                labels: {
                    align: 'left',
                    x: 0,
                    y: -5
                },
                title: {
                    text: null
                }
            },
            subtitle: {
                text: null
            },
            credits: {
                enabled: false
            }
        }
    }]
  },
  series: [
    {
      name: "Rider1",
      color: 'green',
      data: [],
    },
  ],
};

export { chartOptions, tooltipFormater, labelsFormatter, scaleYAxis };
