<template>
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
                <input type="file" @change="uploadFile" accept=".gpx, .tcx">
            </div>
            <div class="form-group mb-3" v-if="files != null">
                <button type="submit" class="btn btn-secondary">Upload</button>
                <LoadingButton v-if="GetLoading && !GetError"/>
                <ErrorAlert v-if="GetError" />
                <SuccessAlert v-if="GetSuccess" />
            </div>
        </form>
</template>

<script>
import LoadingButton from '../../Loading/LoadingButton.vue';
import ErrorAlert from '../../Alert/ErrorAlert.vue'
import SuccessAlert from '../../Alert/SuccessAlert.vue'

export default {
    name: 'ImportInput',
    components: {
        LoadingButton,
        ErrorAlert,
        SuccessAlert
    },
    data() {
        return {
             files: null
        }
    },
    methods: {
        uploadFile (event) {
            this.files = event.target.files
        },
        handleSubmit() {
          if (this.files != null) {
            const formData = new FormData();
            for (const i of Object.keys(this.files)) {
                formData.append('file', this.files[i])
            }
            this.$store.dispatch('getSportData', formData);
          }

        }  
    },
    computed: {
        GetLoading() {
            return this.$store.getters.getLoadingTime;
        },
        GetError() {
            return this.$store.getters.getError;
        },
        GetSuccess() {
            return this.$store.getters.getSuccess;
        }
    },
}
</script>