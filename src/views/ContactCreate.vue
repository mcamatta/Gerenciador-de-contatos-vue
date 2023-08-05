<template>
  <div class="d-flex justify-content-between mb-3">
    <h2 class="m-0">Contact Form</h2>
    <RouterLink to="/" class="btn btn-primary fw-bold">Back</RouterLink>
  </div>
  <FormContact @onSubmit="store"/>
</template>
<script>
import { store } from '@/helper/local-storage'
import FormContact from '@/components/FormContact.vue'

export default {
  methods: {
    store(form) {
      let id = store(form)
      this.$router.push({
        name: 'contact',
        params: { id: id }
      })
    }
  },
  components: {
    FormContact
  }
}
</script>