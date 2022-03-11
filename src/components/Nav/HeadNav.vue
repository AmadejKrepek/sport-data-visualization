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
      <li class="nav-item mx-auto">

      </li>
      <li class="nav-item">
        <div class="p-2">Welcome {{getWithExpiry('registerData').name + ' ' + getWithExpiry('registerData').surname + '!'}}</div>
      </li>
      <li class="nav-item p-2">
        <router-link to="/account"><fa icon="circle-user" class="user-symbol"></fa></router-link>
      </li>
      <div class="nav-item" v-if="GetRegisterStatus.isSigned">
        <button class="btn text-white" @click="Logout()">Logout</button>
      </div>
    </ul>
</template>

<script>
import { getWithExpiry } from '../../utils/localstorage/localstorage';

export default {
  name: "HeadNav",
  components: {
    
  },
  data() {
    return {
      auth: {
        isRegistered: getWithExpiry('registerData') != null ? true : false,
        isSigned: false,
        rememberMe: getWithExpiry('loginData').remember
      },
    }
  },
  methods: {
    RenderStats() {
      this.$store.dispatch('setSelectedStats', true)
    },
    ClearStats() {
      this.$store.dispatch('setSelectedStats', false)
    },
    getWithExpiry,
    Logout() {
      this.$store.dispatch('setRegisterStatus', this.auth)
    }
  },
  computed: {
    GetRegisterStatus() {
      return this.$store.getters.getRegisterStatus;
    },
  },
};
</script>

<style scoped>
.user-symbol {
  font-size: 22px;
}
</style>
