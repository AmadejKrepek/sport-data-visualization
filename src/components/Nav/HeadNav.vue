<template>
    <ul class="nav justify-content-center bg-dark text-white p-2">
      <li class="nav-item">
        <router-link class="nav-link active" to="/" @click="ClearStats()">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active" to="/realtime" @click="ClearStats()">Realtime</router-link>
      </li>
       <li class="nav-item">
        <button class="btn nav-link" @click="RenderStats()">Stats</button>
      </li>
       <li class="nav-item">
        <router-link class="nav-link active" to="/map" @click="ClearStats()">Map</router-link>
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Data</div>
          <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
              <li> 
                <!-- Button trigger modal -->
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#importDataModal" @click="ClearStats()">
                  Import
                </button>  
              </li>
          </ul>
      </li>
    </ul>
</template>

<script>

export default {
  name: "HeadNav",
  components: {
    
  },
  methods: {
    RenderStats() {
      this.$store.dispatch('setSelectedStats', true)
    },
    ClearStats() {
      this.$store.dispatch('setSelectedStats', false)
    }
  }
};
</script>
