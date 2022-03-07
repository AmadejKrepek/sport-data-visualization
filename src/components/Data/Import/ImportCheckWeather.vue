<template>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="check_weather" v-model="name" />
    <label class="form-check-label" for="check_weather">Include weather data <i>(optional)</i></label>
  </div>
</template>

<script>
export default {
    computed: {
        name: {
            get(value) {
                return value;
            },
            set(newValue) {
                return this.$store.dispatch('setCheckWeather', newValue);
            }
        },
    }
}
</script>