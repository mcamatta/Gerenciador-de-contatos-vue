<template>
  <AppBreadcrumb :items="[{ name: 'Home', url: { name: 'home' } }, { name: 'Create' }]" />

  <div class="d-flex justify-content-between mb-3">
    <h2 class="m-0">Contact Form</h2>
    <RouterLink to="/" class="btn btn-primary fw-bold">Back</RouterLink>
  </div>

  <FormContact @onSubmit="storeData" :error="error" />
</template>
<script>
import FormContact from '@/components/FormContact.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import storageMixin from '@/storageMixin'

export default {
  mixins: [storageMixin],
  data() {
    return {
      error: ''
    }
  },
  methods: {
    storeData(form) {
      try {
        let id = this.store(form)
        this.$router.push({
          name: 'contact',
          params: { id: id }
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