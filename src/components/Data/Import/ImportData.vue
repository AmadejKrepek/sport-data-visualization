<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-xl-12">
                <div class="border border-3 border-secondary rounded p-2" v-if="GetSportData != null" >
                    <h5>Available data: </h5>
                    <AvailableData :sportData="GetSportData" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AvailableData from '../Available/AvailableData.vue';

export default {
    name: 'ImportData',
    components: {
        AvailableData
    },
    computed: {
        GetSportData() {
          return this.$store.getters.getSportData;
      }
    }
}
</script>