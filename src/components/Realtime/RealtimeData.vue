<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-xl-12">
            <RealtimeChart />
        </div>
    </div>
</div>

</template>

<script>
import RealtimeChart from './RealtimeChart.vue';

export default {
    components: {
        RealtimeChart
    }
}
</script>