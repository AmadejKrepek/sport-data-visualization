<template>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col-12 col-xl-6 offset-xl-3 rounded-2 p-4 account">
                <h4>Account Details</h4>
                <AccountPreview />
            </div>
        </div>
    </div> 
</template>

<script>
import AccountPreview from '../components/Account/AccountPreview.vue';

export default {
    components: {
        AccountPreview
    }
}
</script>

<style scoped>
.account {
    background-color: rgb(132, 132, 221);
}
</style>