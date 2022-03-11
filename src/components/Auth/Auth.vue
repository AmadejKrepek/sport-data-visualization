<template>
    <div class="container p-3">
        <div class="row">
            <div class="col-12 col-md-6 offset-md-3">
                <div v-if="!GetRegisterStatus.isRegistered">
                    <h3 class="text-center">Register</h3>
                    <RegisterForm />
                </div>
                <div v-if="GetRegisterStatus.isRegistered">
                    <h3 class="text-center">Login</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegisterForm from './RegisterForm.vue';
import LoginForm from './LoginForm.vue';

export default {
    components: {
        RegisterForm,
        LoginForm
    },
    computed: {
        GetRegisterStatus() {
            return this.$store.getters.getRegisterStatus;
        }
    }
}
</script>