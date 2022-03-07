<template>
    <div class="mb-3">
        <label for="apiKeyInput" class="form-label">API KEY</label>
        <input type="password" class="form-control" id="apiKeyInput" v-model="apiKey" aria-describedby="apiKeyHelp">
        <div id="apiKeyHelp" class="form-text"><b>API key required. URL: https://visualcrossing.com/</b></div>
  </div>
</template>

<script>
export default {
    computed: {
        apiKey: {
            get() {
                return this.$store.getters.getWeatherApiKey;
            },
            set(newValue) {
                if (newValue.length > 0) {
                    return this.$store.dispatch('setWeatherApiKey', newValue);
                }
            }
        },
    }
}
</script>