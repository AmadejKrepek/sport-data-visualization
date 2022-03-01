<template>
<div class="modal fade" id="importDataModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="importDataModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="importDataModalLabel">Import Data Widget</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ImportInput />
        <ImportData />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  :disabled="!GetSuccess">Load</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ImportInput from '../Import/ImportInput.vue'
import ImportData from '../Import/ImportData.vue';

export default {
    name: 'ImportModal',
    data() {
      return {
        disabled: 0
      }
    },
    components: {
        ImportInput,
        ImportData
    },
    computed: {
        GetSuccess() {
            return this.$store.getters.getSuccess;
        }
    }
}
</script>