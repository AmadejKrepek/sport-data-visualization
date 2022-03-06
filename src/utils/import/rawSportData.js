import { AddRawSportRequest } from '../axios/multipleAxios';
import axios from 'axios';

function ImportRawSportData(data, commit) {
    commit('SET_LOADING_TIME', true);
    axios.all(AddRawSportRequest(data))
    .then(responses => {
        console.log(responses)
        commit('SET_SPORT_DATA', responses[0].data);
        commit('SET_SUCCESS', true);
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
    ImportRawSportData
}