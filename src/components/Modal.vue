<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="modal d-block">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="header" />
          </h5>
          <button type="button" class="btn-close" @click="close"></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<style>
.modal {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>