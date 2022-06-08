import { addCharts } from '../../functions/charts/addCharts';
import { removeEmptyMetrics } from '../../functions/tables/integralMetrics/removeEmptyMetrics';
import { AddMultipleRequests, AddTopographicRequest } from '../axios/multipleAxios';
import axios from 'axios';
import { getWithExpiry, setWithExpiry } from '../localstorage/localstorage';
import { ChangePositions } from '../positions/changePositions';
import { Event } from '../calendar/event/event';

function ImportSportData(data, commit) {
    commit('SET_LOADING_TIME', true);

    commit('SET_WEATHER_DATA', []);

    axios.all(AddMultipleRequests(data))
    .then(responses => {
        console.log(responses)

        console.log(responses[0].data)
        
        setWithExpiry('raw_sport_data', responses[0].data, 1000*60*60*24);
        setWithExpiry('raw_integral_sport_data', responses[1].data, 1000*60*60*24);

        var event = new Event();
        var intergralArr = [];
        var intergralSportDataArray = getWithExpiry('raw_integral_sport_data_array');
        if (intergralSportDataArray != null) {
            intergralArr = intergralSportDataArray;
            if (intergralArr.length > 10) {
                intergralArr.length = 10;
            }
        }
        intergralArr.push({stats: responses[1].data, original: responses[0].data });
        commit('SET_CALENDAR_DATA', event.PrepareEvents(intergralArr));

        setWithExpiry('raw_integral_sport_data_array', intergralArr, 1000*60*60*24);

        commit('SET_SPORT_DATA', ChangePositions(responses[0].data));
        commit('SET_CHART_OPTIONS', addCharts(responses[0].data))
        commit('SET_INTEGRAL_SPORT_DATA', removeEmptyMetrics(responses[1].data));
        commit('SET_SUCCESS', true);

        axios.all(AddTopographicRequest((responses[0].data)))
        .then(response => {
            let blob = new Blob(
                [response[0].data], 
                { type: response[0].headers['content-type'] }
              )
            let image = URL.createObjectURL(blob);
            commit('SET_HILL_IMAGE', image);
            return image;
        })

    })
    .catch((error) => {
        commit('SET_ERROR', true);
        console.log(error);
    })
    .finally(() => {
        commit('SET_LOADING_TIME', false)
    })
}

export {
    ImportSportData
}