import { chartOptions } from "../../utils/chart/chartOptions"

class ChartData {
    constructor() {
        this.chartOptions = JSON.parse(JSON.stringify(chartOptions));
    }
}

export {
    ChartData
}