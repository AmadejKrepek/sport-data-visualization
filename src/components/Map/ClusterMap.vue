<template>
    <span>Map Type:</span>
    <select v-model="selected" class="form-select mb-2" style="width: 150px">
        <option value="https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png">OSM</option>
        <option value="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}">GOOGLE</option>
    </select>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" id="map">

        <ol-view ref="view" :center="[GetSportData.positions[0][0], GetSportData.positions[GetSportData.positions[0].length - 1][1]]" :rotation="rotation" :zoom="zoom" :projection="projection" />

        <ol-tile-layer>
            <ol-source-xyz :url="selected" />
        </ol-tile-layer>

        <ol-vector-layer>
            <ol-source-vector>
                <ol-feature>
                    <ol-geom-polygon :coordinates="[GetSportData.positions]"></ol-geom-polygon>
                    <ol-style>
                        <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>
                    </ol-style>
                </ol-feature>
            </ol-source-vector>
        </ol-vector-layer>

        <ol-overlay :position="GetSportData.positions[0]">
            <template v-slot="slotProps">
               <div class="container-fluid rounded-2text-center">
                    <div class="row">
                        <div class="col-12 col-xl-12">
                            <fa icon="flag-checkered" class="flag-symbol" id="temperature"></fa>
                            <span class="d-none">{{slotProps}}</span>
                        </div>
                    </div>
                </div>
            </template>
        </ol-overlay>

        <ol-overlay :position="GetSportData.positions[1]">
            <template v-slot="slotProps">
               <div class="container-fluid rounded-2 text-center">
                    <div class="row">
                        <div class="col-12 col-xl-12">
                            <fa icon="flag-checkered" class="flag-end-symbol" id="temperature"></fa>
                            <span class="d-none">{{slotProps}}</span>
                        </div>
                    </div>
                </div>
            </template>
        </ol-overlay>

        <ol-overlay :position="[GetSportData.positions[0][0] + 0.00192, GetSportData.positions[0][1] + 0.0029]">
            <template v-slot="slotProps">
               <div class="container-fluid rounded-2 bg-secondary text-center p-4">
                    <div class="row">
                        <div class="col-12 col-xl-12">
                            <h3>Summary</h3> 
                            <div>Total Distance: <b>{{Math.round(GetSportData.total_distance * 10) / 10}}</b> m</div>
                            <div>Max Speed: <b>{{Math.round(Math.max(...GetSportData.speeds) * 10) / 10}}</b> km/h</div>
                            <div>Max Altitude: <b>{{Math.round(Math.max(...GetSportData.altitudes) * 10) / 10}}</b> m</div>
                            <div>Min Altitude: <b>{{Math.round(Math.min(...GetSportData.altitudes) * 10) / 10}}</b> m</div>
                            <div>Duration <b>{{CalculateDuration(GetSportData.timestamps)}} h</b></div>
                            <span class="d-none">{{slotProps}}</span>
                        </div>
                    </div>
                </div>
            </template>
        </ol-overlay>

    </ol-map>
</template>

<script>
import {
    ref
} from 'vue'

import moment from 'moment';

export default {
    setup() {
        const center = ref([16.2338799610734, 46.60280294716358])
        const projection = ref('EPSG:4326')
        const zoom = ref(20)
        const rotation = ref(0)
        const radius = ref(40)
        const strokeWidth = ref(10)
        const strokeColor = ref('red')
        const selected = ref('https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png')
       

        return {
            center,
            projection,
            zoom,
            rotation,
            radius,
            strokeWidth,
            strokeColor,
            selected
        }
    },
    methods: {
        CalculateDuration(values) {
            var startTime = values[0];
            var endTime = values[values.length-1];
            var hours = moment
                .duration(moment(endTime, 'YYYY/MM/DD HH:mm')
                .diff(moment(startTime, 'YYYY/MM/DD HH:mm'))
                ).asHours();
            return hours;
        }
    },
    computed: {
        GetSportData() {
            return this.$store.getters.getSportData;
        }
    }
}
</script>

<style scoped>
#map {
    height: 100vh;
    background-color: #222;
    color: #eee;
    font-family: monospace;
}

.flag-symbol {
    color: rgb(25, 139, 231);
    font-size: 60px;
}

.flag-end-symbol {
    color: green;
    font-size: 60px;
}
</style>
