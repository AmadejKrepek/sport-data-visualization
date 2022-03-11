<template>
    <div v-if="GetRealTime != null">
        <RealtimeData v-if="!GetSelectedStats" />
        <RealtimeStats v-if="GetSelectedStats" />
    </div>
    <div v-else class="text-center">
        <div class="spinner-grow text-primary p-2" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import RealtimeData from '../components/Realtime/RealtimeData.vue'
import RealtimeStats from '../components/Realtime/Stats/RealtimeStats.vue';

export default {
    created() {
        this.$store.dispatch('getRealTime');
    }, 
    components: {
        RealtimeData,
        RealtimeStats
    },
    computed: {
        GetSelectedStats() {
            return this.$store.getters.getSelectedStats;
        },
        GetRealTime() {
            return this.$store.getters.getRealTime;
        },
    }
}
</script>