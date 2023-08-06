<template>
  
  <AppBreadcrumb :items="[{name: 'Home', url: {name: 'home'}}, {name: 'Details'}]"/>
  
  <div class="d-flex justify-content-between mb-5">
    <h2 class="m-0">Contact Details</h2>
    <RouterLink to="/" class="btn btn-primary fw-bold">Back</RouterLink>
  </div>

  <div class="d-flex gap-4 align-items-center">
    <img :src="contact.picture" alt class="rounded-circle">
    <div>
      <h3 class="fs-3">{{ contact.name }}</h3>
      <p class="text-secondary fs-5 mb-0">{{ contact.contact }}</p>
      <p class="text-secondary fs-5 mb-0">{{ contact.email }}</p>
      <RouterLink :to="{ name: 'contacts.edit', params: { id: contact.id } }" class="text-primary fs-5">Edit</RouterLink>
    </div>
  </div>

</template>
<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import { findItem } from '@/services/local-storage';

export default {
    data() {
        return {
            contact: Object
        };
    },
    mounted() {
        this.contact = findItem(this.$route.params.id);
    },
    components: { AppBreadcrumb }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}
</style>