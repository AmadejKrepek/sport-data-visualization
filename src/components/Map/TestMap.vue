<template>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" id="map">

        <ol-view ref="view" :center="[GetSportData.positions[0][0], GetSportData.positions[GetSportData.positions[0].length - 1][1]]" :rotation="rotation" :zoom="zoom" :projection="projection" />

        <ol-tile-layer>
            <ol-source-osm />
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

    </ol-map>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    setup() {
        const center = ref([16.2338799610734, 46.60280294716358])
        const projection = ref('EPSG:4326')
        const zoom = ref(11)
        const rotation = ref(0)
        const radius = ref(40)
        const strokeWidth = ref(10)
        const strokeColor = ref('red')

        return {
            center,
            projection,
            zoom,
            rotation,
            radius,
            strokeWidth,
            strokeColor,
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
</style>
