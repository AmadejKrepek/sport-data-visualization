import auth from '../axios/auth';

function ImportSportData(data, commit) {
    commit('SET_LOADING_TIME', true);
    auth.post('/reader/file', data)
    .then(response => {
        console.log(response)
    })
    .catch((error) => {
        commit('SET_ERROR', true);
        console.log(error);
    })
    .finally(() => {
        commit('SET_LOADING_TIME', false)
        commit('SET_SUCCESS', true);
    })
}

export {
    ImportSportData
}