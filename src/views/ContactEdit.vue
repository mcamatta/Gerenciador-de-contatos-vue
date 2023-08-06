<template>
  <AppBreadcrumb
    :items="[{ name: 'Home', url: { name: 'home' } }, { name: 'Details', url: { name: 'contact', params: { id: this.$route.params.id } } }, { name: 'Edit' }]" />

  <div class="d-flex justify-content-between mb-3">
    <h2 class="m-0">Contact Edit Form</h2>
    <RouterLink :to="{ name: 'contact', params: { id: contact.id } }" class="btn btn-primary fw-bold">Back</RouterLink>
  </div>

  <FormContact :contact="contact" @onSubmit="updateData" :error="error" />
</template>
<script>
import storageMixin from '@/storageMixin'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import FormContact from '@/components/FormContact.vue'

export default {
  mixins: [storageMixin],
  data() {
    return {
      contact: [],
      error: ''
    };
  },
  created() {
    this.contact = this.findItem(this.$route.params.id);
  },
  methods: {
    updateData(form) {
      try {
        this.update(form)
        this.$router.push({
          name: 'contact',
          params: { id: this.contact.id }
        })
      } catch (e) {
        this.error = e.message
      }
    }
  },
  components: {
    FormContact,
    AppBreadcrumb
  }
}
</script>
<style></style>