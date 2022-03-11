<template>
    <RealtimeForm :GetRealTime="GetRealTime" />
</template>

<script>
import RealtimeForm from './RealtimeForm.vue';

export default {
    data() {
        return {
            polling: null
        }
    },
    components: {
        RealtimeForm
    },
    methods: {
        pollData () {
            this.polling = setInterval(() => {

                this.$store.dispatch('getRealTime');

                }, 1000)
            },  
        },
    beforeUnmount () {
        clearInterval(this.polling)
    },
    created () {
        this.pollData()
    }, 
    computed: {
        GetRealTime() {
            return this.$store.getters.getRealTime;
        },
    }
}
</script>