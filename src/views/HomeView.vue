<template>
  <section class="row">
    <div class="d-flex justify-content-between mb-3">
      <h2 class="m-0">Contact List</h2>
      <RouterLink to="/" class="btn btn-success fw-bold">New</RouterLink>
    </div>
    <div v-for="contact in contacts" :key="contact.id" class="col-lg-4">
      <CardContact :info="contact"/>
    </div>
  </section>
</template>

<script>
import CardContact from '@/components/CardContact.vue'
export default {
  name: 'HomeView',
  data(){
    return {
      contacts: [
        {id: 1, photo: 'https://picsum.photos/200', name: 'Michel Camatta', contact: 61994304410, email: 'camattamichel@gmail.com'},
        {id: 2, photo: 'https://picsum.photos/200', name: 'Cecília Siqueira', contact: 61994304410, email: 'ceciliasiqueira@gmail.com'},
        {id: 3, photo: 'https://picsum.photos/200', name: 'Carlos Marcos', contact: 61994304410, email: 'carlos@gmail.com'},
      ]
    }
  },
  components: {
    CardContact
  }
}
</script>
