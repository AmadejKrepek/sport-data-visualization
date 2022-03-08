import { createStore } from 'vuex'
import { ImportRealTime } from '../utils/import/realTime.js';
import { ImportSportData } from '../utils/import/sportData';
import { ImportSportDataWithWeather } from '../utils/import/sportDataWithWeather'; 
import { UpdatePoint } from '../utils/import/update/updatePoint.js';

export default createStore({
  state: {
    loading: false,
    error: false,
    success: false,
    sportData: null,
    integralSportData: null,
    chartOptions: null,
    weatherData: { check: false, apiKey: '', data: [] },
    realTime: { data: null, chartOptions: null, chartPointUpdate: null, selectedChart: null }
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
    },
    SET_CHECK_WEATHER_DATA(state, check) {
      state.weatherData.check = check;
    },
    SET_WEATHER_API_KEY(state, apiKey) {
      state.weatherData.apiKey = apiKey;
    },
    SET_WEATHER_DATA(state, weatherData) {
      state.weatherData.data = weatherData;
    },
    SET_REALTIME_DATA(state, realTimeData) {
      state.realTime.data = realTimeData;
    },
    SET_REALTIME_CHART_OPTIONS(state, chartOptions) {
      state.realTime.chartOptions = chartOptions;
    },
    SET_REALTIME_CHART_POINT(state, chartOptions) {
      state.realTime.chartPointUpdate = chartOptions;
    },
    SET_SELECTED_CHART(state, chart) {
      state.realTime.selectedChart = chart;
    }
  },
  actions: {
    getSportData({ commit }, fileData) {
      if (this.state.weatherData.apiKey != '' && this.state.weatherData.check == true) {
        ImportSportDataWithWeather(this.state.weatherData.apiKey, commit);
      }
      else {
        ImportSportData(fileData, commit);
      }
    },
    setCheckWeather({ commit }, newValue) {
      commit ('SET_CHECK_WEATHER_DATA', newValue);
    },
    setWeatherApiKey({ commit }, apiKey) {
      commit ('SET_WEATHER_API_KEY', apiKey);
    },
    getRealTime({ commit }) {
      ImportRealTime(commit);
    },
    getRealTimeChartPoint({ commit }, chart) {
      if (this.state.realTime.chartOptions != null) {
        UpdatePoint(chart, this.state.realTime.selectedChart, this.state.realTime.data, commit);
      }
    },
    setChart({commit}, value) {
      commit ('SET_SELECTED_CHART', value);
    }
  },
  getters: {
    getSportData: (state) => state.sportData,
    getIntegralSportData: (state) => state.integralSportData,
    getLoadingTime: (state) => state.loading,
    getError: (state) => state.error,
    getSuccess: (state) => state.success,
    getChartOptions: (state) => state.chartOptions,
    getCheckWeatherData: (state) => state.weatherData.check,
    getWeatherApiKey: (state) => state.weatherData.apiKey,
    getWeatherData: (state) => state.weatherData.data,
    getRealTime: (state) => state.realTime.data,
    getRealTimeChartOptions: (state) => state.realTime.chartOptions,
    getNumSelectedChart: (state) => state.realTime.selectedChart,
  },
  modules: {

  }
})
