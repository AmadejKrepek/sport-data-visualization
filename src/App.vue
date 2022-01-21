<template>
  <div>
    <HeadNav />
  </div>
  <router-view/>
</template>

<script>
import HeadNav from '../src/components/Nav/HeadNav.vue'

export default {
  name: 'App',
  components: {
    HeadNav
  }
}
</script>
