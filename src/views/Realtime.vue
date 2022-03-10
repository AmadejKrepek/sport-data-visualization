<template>
    <RealtimeData v-if="!GetSelectedStats" />
    <RealtimeStats v-if="GetSelectedStats" />
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
        }
    }
}
</script>