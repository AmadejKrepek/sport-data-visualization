<template>
    <form>
        <div v-if="!isSuccess">
            <div class="mb-3">
                <label for="nameInput" class="form-label">Name</label>
                <input type="text" class="form-control" id="nameInput" aria-describedby="nameHelp" v-model="registerData.name" required>
            </div>
            <div class="mb-3">
                <label for="surnameInput" class="form-label">Surname</label>
                <input type="text" class="form-control" id="surnameInput" aria-describedby="surnameHelp" v-model="registerData.surname" required>
            </div>
            <div class="mb-3">
                <label for="ageInput" class="form-label">Age</label>
                <input type="text" class="form-control" id="ageInput" aria-describedby="ageHelp" v-model="registerData.age" required>
            </div>
            <div class="mb-3">
                <label for="weightInput" class="form-label">Weight</label>
                <input type="text" class="form-control" id="weightInput" aria-describedby="weightHelp" v-model="registerData.weight" required>
            </div>
            <div class="mb-3">
                <label for="emailInput" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" v-model="registerData.email" required>
            </div>
            <div class="mb-3">
                <label for="usernameInput" class="form-label">Username</label>
                <input type="text" class="form-control" id="usernameInput" aria-describedby="usernameHelp" v-model="registerData.username" required>
            </div>
            <div class="mb-3">
                <label for="passwordInput" class="form-label">Password</label>
                <input type="password" class="form-control" id="passwordInput" v-model="registerData.password" required>
            </div>
        </div>
        <div v-else>
        </div>
        <h6 v-if="isError" class="text-danger">Your data is not correct. Please try to fill form again.</h6>
        <h6 v-if="isSuccess" class="text-success">You have succesfully registered.</h6>
        <button type="button" class="btn btn-secondary" @click="Register()" v-if="!isSuccess">Submit</button>
        <div v-if="isSuccess">
            <p>Verification code: <b>{{CreateGuid()}}</b> <br />(check if code that was sent to <b>{{registerData.email}}</b> is equal to displayed one)</p>
            <button type="button" class="btn btn-primary" @click="GoToLogin()" v-if="isSuccess">Sign In</button>
        </div>
    </form>
</template>

<script>
import { Validate } from '../../utils/auth/Validate';

export default {
    data() {
        return {
            registerData: {
                name: '',
                surname: '',
                age: 0,
                weight: 0,
                email: '',
                username: '',
                password: ''
            },
            auth: {
                isRegistered: true,
                isSigned: false
            },
            isValidated: false,
            isError: false,
            isSuccess: false
        }
    },
    methods: {
        Register() {
            if (Validate(this.registerData)) {
                this.isValidated = false;
                this.isSuccess = true;
                this.isError = false;
            }
            else {
                this.isValidated = false;
                this.isError = true;
                this.isSuccess = false;
            }
        },
        GoToLogin() {
                this.$store.dispatch('setRegisterStatus', this.auth);
        },
        CreateGuid() {  
            function _p8(s) {  
                var p = (Math.random().toString(16)+"000000000").substr(2,8);  
                return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
            }  
            return _p8() + _p8(true) + _p8(true) + _p8();  
        }
    }
}
</script>