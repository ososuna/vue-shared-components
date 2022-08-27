<script setup lang="ts">
defineProps<{
  name:     string,
  title:    string,
  decision: string
}>()
const emit = defineEmits([
  'acceptAction',
  'cancelAction'
]);
</script>

<template>
<div class="modal fade" :id="name" tabindex="-1" :aria-labelledby="`${ name }Label`" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5
          class="modal-title"
          :id="`${ name }Label`"
        >
          {{ title }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
        </button>
      </div>
      <div class="modal-body">
        <slot name="main"></slot>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
          @click="emit( 'cancelAction' )"
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal"
          @click="emit( 'acceptAction' )"
        >
          {{ decision }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>
