<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-xl-4">
                <div><fa icon="road" class="quick-symbol" id="distance"></fa></div>
                <div class="mt-1 mb-2 quick-value">{{Math.round(GetRealTime.total_distance * 100) / 100}} m</div>
            </div>
            <div class="col-12 col-xl-4">
                <fa icon="stopwatch" class="quick-symbol" id="timestamp"></fa>
                <div class="mt-1 mb-2 quick-value">{{moment(GetRealTime.timestamps[GetRealTime.timestamps.length - 1]).format('HH:mm')}}</div>
            </div>
            <div class="col-12 col-xl-4">
                <fa icon="gauge-high" class="quick-symbol" id="speed"></fa>
                <div class="mt-1 mb-2 quick-value">{{Math.round(GetRealTime.speeds[GetRealTime.speeds.length - 1] * 100) / 100}} km/h</div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    methods: {
        moment
    },
    props: {
        GetRealTime: Object
    }
}
</script>

<style scoped>
.quick-symbol {
    font-size: 120px;
}

.quick-value {
    font-size: 30px;
}

#distance {
    color: rgb(189, 118, 25);
}

#timestamp {
    color: rgb(62, 62, 163);
}

#speed {
    color: rgb(153, 51, 51);
}
</style>