<template>
    <div v-if="GetIntegralSportData != null">
      <h4 class="p-2">Integral Metrics</h4>
        <div class="table-responsive">
            <table class="table table-striped rounded-2">
                <thead>
                    <tr>
                        <th scope="col">Parameter</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, key) in GetIntegralSportData" :key="key">
                        <td v-if="value != null">{{convertKeysIntegralMetrics(key)}}</td>
                        <td v-if="value != null">{{convertIntegralMetrics(key, value)}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { convertIntegralMetrics, convertKeysIntegralMetrics } from '../../../functions/tables/integralMetrics/convertIntegralMetrics';

export default {
    methods: {
        convertIntegralMetrics,
        convertKeysIntegralMetrics
    },
    computed: {
        GetIntegralSportData() {
          return this.$store.getters.getIntegralSportData;
      }
    },
}
</script>