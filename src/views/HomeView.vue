<template>
  <section class="row">
    <div class="d-flex justify-content-between mb-3">
      <h2 class="m-0">Contact List</h2>
      <RouterLink to="/contacts/create" class="btn btn-success fw-bold">New</RouterLink>
    </div>
    <div v-for="contact in contacts" :key="contact.id" class="col-lg-4">
      <CardContact :info="contact"/>
    </div>
  </section>
</template>

<script>
import { getItems } from '@/helper/local-storage'
import CardContact from '@/components/CardContact.vue'
export default {
  name: 'HomeView',
  data(){
    return {
      contacts: []
    }
  },
  created() {
    this.contacts = getItems();
  },
  components: {
    CardContact
  }
}
</script>
