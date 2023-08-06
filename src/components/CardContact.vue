<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="d-flex gap-2">
        <img :src="info.picture" alt class="rounded-circle">
        <div>
          <h3 class="card-title fs-5">{{ info.name }}</h3>
          <p class="card-subtitle">{{ info.contact }}</p>
          <p class="card-subtitle">{{ info.email }}</p>
        </div>
      </div>
      <div v-if="auth.isAuthenticate" class="d-flex gap-2 mt-3 justify-content-end">
        <RouterLink :to="{ name: 'contact', params: { id: info.id } }" class="text-primary">Details</RouterLink>
        <RouterLink :to="{ name: 'contacts.edit', params: { id: info.id } }" class="text-warning">Edit</RouterLink>
        <a href="#" @click="$emit('delete', info.id)" class="text-danger">Delete</a>
      </div>
    </div>
  </div>
</template>
<script>
import { auth } from '@/auth'
import storageMixin from '@/storageMixin'

export default {
  props: {
    info: Object
  },
  mixins: [storageMixin],
  setup() {
    return { auth }
  }
}
</script>
<style scoped>
img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
</style>