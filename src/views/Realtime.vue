<template>
    <RealtimeData />
</template>

<script>
import RealtimeData from '../components/Realtime/RealtimeData.vue'

export default {
    created() {
        this.$store.dispatch('getRealTime');
    },
    components: {
        RealtimeData
    }
}
</script>