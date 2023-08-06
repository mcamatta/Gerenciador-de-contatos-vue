<template>

  <AppBreadcrumb :items="[{name: 'Home', url: {name: 'home'}}, {name: 'Details', url: {name: 'contact', params: {id: this.$route.params.id}}}, {name: 'Edit'}]"/>

  <div class="d-flex justify-content-between mb-3">
    <h2 class="m-0">Contact Edit Form</h2>
    <RouterLink :to="{name: 'contact', params: {id: contact.id}}" class="btn btn-primary fw-bold">Back</RouterLink>
  </div>

  <FormContact :contact="contact" @onSubmit="update"/>
  
</template>
<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import FormContact from '@/components/FormContact.vue';
import { findItem, update } from '@/services/local-storage';

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
    FormContact,
    AppBreadcrumb
}
}
</script>
<style></style>