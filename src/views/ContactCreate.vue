<template>
  <div class="d-flex justify-content-between mb-3">
    <h2 class="m-0">Contact Form</h2>
    <RouterLink to="/" class="btn btn-primary fw-bold">Back</RouterLink>
  </div>
  <form class="row" @submit.prevent="store">
    <div class="col-lg-7 mx-auto">
      <div class="row g-3">
        <div class="col-12">
          <label for="photo" class="form-label">Photo</label>
          <input class="form-control" type="file" id="photo" accept="image/*">
        </div>
        <div class="col-12">
          <label for="name" class="form-label">Name</label>
          <input v-model="form.name" type="text" class="form-control" id="name">
        </div>
        <div class="col-12">
          <label for="contact" class="form-label">Contact</label>
          <input v-model="form.contact" type="text" class="form-control" id="contact">
        </div>
        <div class="col-12">
          <label for="email" class="form-label">Email</label>
          <input v-model="form.email" type="email" class="form-control" id="email">
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { store } from '@/helper/local-storage'
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    store() {
      store(this.form)
      this.form = {};
    },
    getItems() {
      return JSON.parse(window.localStorage.getItem('contacts'));
    }
  }
}
</script>