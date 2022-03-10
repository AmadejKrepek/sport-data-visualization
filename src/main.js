import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

library.add(fas);

createApp(App)
    .use(store)
    .component('fa', FontAwesomeIcon)
    .use(VueHighcharts, { Highcharts })
    .use(OpenLayersMap)
    .use(router)
.mount('#app')
