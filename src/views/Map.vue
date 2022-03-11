<template>
<div class="container-fluid">
    <div class="row" v-if="GetSportData != null">
        <div class="col-12 col-xl-12">
            <TestMap />
        </div>
    </div>
    <div class="row" v-else>
        <div class="col-12 col-xl-12">
            <div class="col-12 col-xl-12 mb-4 text-center" v-if="GetSportData == null" data-bs-toggle="modal" data-bs-target="#importDataModal" role="button">
          <h1 class="p-2" >Click here to add some sports data</h1>
          <fa icon="folder-plus" class="folder-symbol" id="temperature"></fa>
      </div>
        </div>
    </div>
</div>
</template>

<script>
import TestMap from '../components/Map/TestMap.vue';

export default {
    components: {
        TestMap
    },
    computed: {
        GetSportData() {
            return this.$store.getters.getSportData;
        }
    }
}
</script>

<style scoped>
.folder-symbol {
  font-size: 200px;
  color: rgb(44, 157, 172);
}
</style>