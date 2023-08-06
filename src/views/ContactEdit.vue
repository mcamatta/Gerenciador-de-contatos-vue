<template>
  <div class="d-flex justify-content-between mb-3">
    <h2 class="m-0">Contact Edit Form</h2>
    <RouterLink :to="{name: 'contact', params: {id: contact.id}}" class="btn btn-primary fw-bold">Back</RouterLink>
  </div>
  <FormContact :contact="contact" @onSubmit="update"/>
</template>
<script>
import FormContact from '@/components/FormContact.vue';
import { findItem, update } from '@/helper/local-storage';

export default {
  data() {
    return {
      contact: Object
    };
  },
  created() {
    this.contact = findItem(this.$route.params.id);
  },
  methods: {
    update(form) {
      update(form)
      this.$router.push({
        name: 'contact',
        params: { id: this.contact.id }
      })
    }
  },
  components: {
    FormContact
  }
}
</script>
<style></style>