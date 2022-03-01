<template>
    <div class="container-fluid">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-12 col-xl-12">
                    <div class="form-group mb-3">
                        <input type="file" @change="uploadFile" accept=".gpx, .tcx">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-xl-12">
                    <div class="form-group mb-3" v-if="files != null">
                        <div class="row">
                            <div class="col-12 col-xl-12">
                                <button type="submit" class="btn btn-secondary mb-3">Upload</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-xl-12">
                                <LoadingButton v-if="GetLoading && !GetError"/>
                                <ErrorAlert v-if="GetError" />
                                <SuccessAlert v-if="GetSuccess" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </form>
    </div>    
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
             files: null,
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

        },
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