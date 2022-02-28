import { createStore } from 'vuex'
import { ImportSportData } from '../../utils/import/sportData';

export default createStore({
  state: {
    loading: false,
    error: false,
    success: false,
    sportData: []
  },
  mutations: {
    SET_SPORT_DATA(state, sportData) {
      state.sportData = sportData;
    },
    SET_LOADING_TIME(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_SUCCESS(state, success) {
      state.success = success;
    }
  },
  actions: {
    getSportData({ commit }, sportData) {
      ImportSportData(sportData, commit);
      commit('SET_SPORT_DATA', sportData);
    }
  },
  getters: {
    getLoadingTime: (state) => state.loading,
    getError: (state) => state.error,
    getSuccess: (state) => state.success
  },
  modules: {
  }
})
