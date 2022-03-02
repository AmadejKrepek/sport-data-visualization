import { createStore } from 'vuex'
import { ImportSportData } from '../utils/import/sportData';

export default createStore({
  state: {
    loading: false,
    error: false,
    success: false,
    sportData: null,
    integralSportData: null,
    chartOptions: null
  },
  mutations: {
    SET_SPORT_DATA(state, sportData) {
      state.sportData = sportData;
    },
    SET_INTEGRAL_SPORT_DATA(state, integralSportData) {
      state.integralSportData = integralSportData;
    },
    SET_LOADING_TIME(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_SUCCESS(state, success) {
      state.success = success;
    },
    SET_CHART_OPTIONS(state, chartOptions){
      state.chartOptions = chartOptions;
    }
  },
  actions: {
    getSportData({ commit }, fileData) {
      ImportSportData(fileData, commit);
    }
  },
  getters: {
    getSportData: (state) => state.sportData,
    getIntegralSportData: (state) => state.integralSportData,
    getLoadingTime: (state) => state.loading,
    getError: (state) => state.error,
    getSuccess: (state) => state.success,
    getChartOptions: (state) => state.chartOptions
  },
  modules: {
  }
})
