<template>
  <div class="container-fluid p-0 mb-4">
    <div class="row">
      <div class="col-12 col-xl-12">
        <ImportModal/>
        <HeadNav />
      </div>
    </div>
  </div>
  <router-view/>
</template>

<script>
import HeadNav from '../src/components/Nav/HeadNav.vue'
import ImportModal from '../src/components/Data/Import/ImportModal.vue'

export default {
  name: 'App',
  components: {
    HeadNav,
    ImportModal
  }
}
</script>
