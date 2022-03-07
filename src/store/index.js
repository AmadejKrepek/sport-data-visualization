import { createStore } from 'vuex'
import { ImportSportData } from '../utils/import/sportData';
import { ImportSportDataWithWeather } from '../utils/import/sportDataWithWeather'; 

export default createStore({
  state: {
    loading: false,
    error: false,
    success: false,
    sportData: null,
    integralSportData: null,
    chartOptions: null,
    weatherData: { check: false, apiKey: '', data: [] },
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
  },
  modules: {

  }
})
