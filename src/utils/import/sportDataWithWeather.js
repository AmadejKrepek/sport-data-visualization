import { addCharts } from '../../functions/charts/addCharts';
import { removeEmptyMetrics } from '../../functions/tables/integralMetrics/removeEmptyMetrics';
import { AddWeatherRequest } from '../axios/multipleAxios';
import axios from 'axios';

function ImportSportDataWithWeather(data, rawData, apiKey, commit) {
    commit('SET_LOADING_TIME', true);
    axios.all(AddWeatherRequest(data, rawData, apiKey))
    .then(responses => {
        console.log(responses)
        commit('SET_SPORT_DATA', responses[0].data);
        commit('SET_CHART_OPTIONS', addCharts(responses[0].data))
        commit('SET_INTEGRAL_SPORT_DATA', removeEmptyMetrics(responses[1].data));
        commit('SET_SUCCESS', true);
    })
    .catch((error) => {
        commit('SET_SPORT_DATA', null);
        commit('SET_INTEGRAL_SPORT_DATA', null);
        commit('SET_CHART_OPTIONS', null)
        commit('SET_ERROR', true);
        console.log(error);
    })
    .finally(() => {
        commit('SET_LOADING_TIME', false)
    })
}

export {
    ImportSportDataWithWeather
}