<template>
    <div>Activity Type: 
        <b>
            <span v-if="sportData.activity_type == null">No data</span>
            <span v-else>{{sportData.activity_type}}</span>
        </b>
    </div>
    <div>Positions: 
        <b>
            <span v-if="sportData.positions == null">No data</span>
            <span v-else>{{sportData.positions.length}} records</span>
        </b>
    </div>
    <div>Altitudes: 
        <b>
            <span v-if="sportData.altitues == null">No data</span>
            <span v-else>{{sportData.altitudes.length}} records</span>
        </b>
    </div>
    <div>Distances: 
        <b>
            <span v-if="sportData.distances == null">No data</span>
            <span v-else>{{sportData.distances.length}} records</span>
        </b>
    </div>
    <div>Total distance: 
        <b>
            <span v-if="sportData.total_distance == null">No data</span>
            <span v-else>1 record</span>
        </b>
    </div>
    <div>Timestamps: 
        <b>
            <span v-if="sportData.timestamps == null">No data</span>
            <span v-else>{{sportData.timestamps.length}} records</span>
        </b>
    </div>
    <div>Heartrates: 
        <b>
            <span v-if="sportData.heartrates == null">No data</span>
            <span v-else>{{sportData.heartrates.length}} records</span>
        </b>
    </div>
    <div>Speeds: 
        <b>
            <span v-if="sportData.speeds == null">No data</span>
            <span v-else>{{sportData.speeds.length}} records</span>
        </b>
    </div>
</template>

<script>
export default {
    name: 'AvailableData',
    props: {
        sportData: Object
    }
}
</script>