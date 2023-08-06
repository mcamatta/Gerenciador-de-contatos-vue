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
      <div class="d-flex gap-2 mt-3 justify-content-end">
        <RouterLink :to="{ name: 'contact', params: { id: info.id } }" class="text-primary">Details</RouterLink>
        <a href="#" @click="openModal(info.id)" class="text-danger">Delete</a>
      </div>
    </div>
  </div>
</template>
<script>
import { removeItem } from '@/services/local-storage'

export default {
  props: {
    info: Object
  },
  methods: {
    openModal(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id);
        this.$emit('delete')
      }
    })
    }
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