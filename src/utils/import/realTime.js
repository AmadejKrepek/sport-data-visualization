import axios from 'axios';
import { addCharts } from '../../functions/charts/addCharts';
import { AddRealTimeRequest } from '../axios/multipleAxios';

function ImportRealTime(commit) {
    axios.all(AddRealTimeRequest())
    .then(response => {
        commit('SET_REALTIME_DATA', response[0].data)
        commit('SET_REALTIME_CHART_OPTIONS', addCharts(response[0].data))
        console.log(response);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {

    })
}

export {
    ImportRealTime
}