import axios from 'axios';
import { AddTopographicRequest } from '../../axios/multipleAxios';

function ImportTopographicFeatures(data, commit) {
    axios.all(AddTopographicRequest(data))
    .then(responses => {
        console.log(responses)

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
    ImportTopographicFeatures
}