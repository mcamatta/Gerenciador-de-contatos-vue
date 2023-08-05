<template>
  <section class="row">
    <div class="d-flex justify-content-between mb-3">
      <h2 class="m-0">Contact List</h2>
      <RouterLink to="/contacts/create" class="btn btn-success fw-bold">New</RouterLink>
    </div>
    <div v-if="contacts.length" class="col-lg-4">
      <div v-for="contact in contacts" :key="contact.id">
        <CardContact :info="contact" v-on:delete="deleted"/>
      </div>
    </div>
    <div v-else class="alert alert-info mt-4 fs-5">
      There are no registered contacts.
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
  methods: {
    deleted() {
      this.contacts = getItems();
    }
  },
  components: {
    CardContact
  }
}
</script>
