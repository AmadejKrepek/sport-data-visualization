import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';

createApp(App)
    .use(store)
    .use(VueHighcharts, { Highcharts })
    .use(router)
.mount('#app')
