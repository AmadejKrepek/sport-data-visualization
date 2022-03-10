<template>
<div class="container-fluid text-center mt-5">
    <div class="row mb-5">
        <div class="col-12 col-xl-4 mb-5">
            <div><fa icon="road" class="realtime-symbol" id="distance"></fa></div>
            <div class="mt-1 mb-2 realtime-value">{{Math.round(GetRealTime.total_distance * 100) / 100}} km</div>
        </div>
        <div class="col-12 col-xl-4 mb-5">
            <fa icon="up-down" class="realtime-symbol" id="altitude"></fa>
            <div class="mt-1 mb-2 realtime-value">{{Math.round(GetRealTime.altitudes[GetRealTime.altitudes.length - 1] * 100) / 100}} m</div>
        </div>
        <div class="col-12 col-xl-4 mb-5">
            <fa icon="stopwatch" class="realtime-symbol" id="timestamp"></fa>
            <div class="mt-1 mb-2 realtime-value">{{moment(GetRealTime.timestamps[GetRealTime.timestamps.length - 1]).format('HH:mm')}}</div>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-12 col-xl-4 mb-5">
            <fa icon="gauge-high" class="realtime-symbol" id="speed"></fa>
            <div class="mt-1 mb-2 realtime-value">{{Math.round(GetRealTime.speeds[GetRealTime.speeds.length - 1] * 100) / 100}} km/h</div>
        </div>
        <div class="col-12 col-xl-4 mb-5">
            <fa icon="person-biking" class="bike-symbol" id="bike"></fa>
        </div>
        <div class="col-12 col-xl-4 mb-5">
            <fa icon="heart-pulse" class="realtime-symbol" id="heart"></fa>
            <div class="mt-1 mb-2 realtime-value">{{Math.round(GetRealTime.heartrates[GetRealTime.heartrates.length - 1] * 100) / 100}} bPm</div>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-12 col-xl-4 mb-5">
            <fa icon="temperature-full" class="realtime-symbol" id="temperature"></fa>
            <div class="mt-1 mb-2 realtime-value">{{Math.round(GetRealTime.weather[GetRealTime.weather.length - 1].temperature * 100) / 100}} °C</div>
        </div>
        <div class="col-12 col-xl-4 mb-5">
            <fa icon="wind" class="realtime-symbol" id="wind"></fa>
            <div class="mt-1 mb-2 realtime-value">{{Math.round(GetRealTime.weather[GetRealTime.weather.length - 1].wind_speed * 100) / 100}} km/h</div>
        </div>
        <div class="col-12 col-xl-4 mb-5">
            <fa icon="eye" class="realtime-symbol" id="visibility"></fa>
            <div class="mt-1 mb-2 realtime-value">{{Math.round(GetRealTime.weather[GetRealTime.weather.length - 1].visibility * 100) / 100}} km</div>
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
        GetRealTime : Object
    }
}
</script>

<style scoped>
.bike-symbol {
    font-size: 250px;
}

.realtime-symbol {
    font-size: 130px;
}

.realtime-value {
    font-size: 40px;
}

#distance {
    color: rgb(228, 116, 24);
}

#altitude {
    color: rgb(206, 219, 26);
}

#timestamp {
    color: rgb(36, 120, 230);
}

#speed {
    color: rgb(192, 29, 97);
}

#bike {
    color: rgb(61, 52, 141);
}

#heart {
    color: rgb(197, 27, 27);
}

#temperature {
    color: rgb(211, 176, 19);
}

#wind {
    color: green;
}

#visibility {
    color: rgb(58, 58, 99);
}
</style>