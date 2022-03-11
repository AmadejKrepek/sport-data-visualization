<template>
{{GetRegisterStatus}}
  <Auth v-if="!GetRegisterStatus.isSigned" />
  <div class="container-fluid p-0" v-if="GetRegisterStatus.isSigned || (GetRegisterStatus.isSigned && GetRegisterStatus.rememberMe)">
    <div class="row">
      <div class="col-12 col-xl-12">
        <ImportModal />
        <HeadNav />
      </div>
    </div>
  </div>
  <router-view v-if="GetRegisterStatus.isSigned || (GetRegisterStatus.isSigned && GetRegisterStatus.rememberMe)" />
</template>

<script>
import HeadNav from "../src/components/Nav/HeadNav.vue";
import ImportModal from "../src/components/Data/Import/ImportModal.vue";
import Auth from "./components/Auth/Auth.vue";
import { getWithExpiry } from "./utils/localstorage/localstorage";

export default {
  name: "App",
  components: {
    HeadNav,
    ImportModal,
    Auth,
  },
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
      auth: {
        isRegistered: getWithExpiry('registerData') != null ? true : false,
        isSigned: false,
        rememberMe: false
      },
    };
  },
  computed: {
    GetRegisterStatus() {
      return this.$store.getters.getRegisterStatus;
    },
  },
  mounted() {
    if (getWithExpiry("registerData") != null) {
      this.$store.dispatch("setRegisterStatus", this.auth);
    }
    if (getWithExpiry("loginData" != null)) {
      this.rememberMe = getWithExpiry('loginData').remember
      if (this.rememberMe) {
        this.isSigned = true;
      }
    }
  },
};
</script>
