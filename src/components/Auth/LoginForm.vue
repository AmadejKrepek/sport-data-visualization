<template>
     <form>
        <div class="mb-3">
            <label for="usernameInput" class="form-label">Username</label>
            <input type="text" class="form-control" id="usernameInput" aria-describedby="usernameHelp" v-model="loginData.username" required>
        </div>
        <div class="mb-3">
            <label for="passwordInput" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwordInput" v-model="loginData.password" required>
        </div>
        <button type="button" class="btn btn-primary" @click="Login">Submit</button>
    </form>
</template>

<script>
import { ValidateSignIn } from '../../utils/auth/Validate'
export default {
    data() {
        return {
            loginData: {
                username: '',
                password: ''
            },
            auth: {
                isRegistered: true,
                isSigned: true
            }
        }
    },
    methods: {
        Login() {
            if (ValidateSignIn(this.loginData)) {
                this.$store.dispatch('setRegisterStatus', this.auth);
            }
        }
    }
}
</script>