<template>
  <div v-if="error" class="alert alert-danger mx-5 my-3">
    {{ error }}
  </div>
  <form class="row" v-on:submit.prevent="$emit('onSubmit', form)">
    <div class="col-lg-7 mx-auto">
      <div class="row g-3">
        <div class="col-12">
          <div v-if="!form.picture">
            <label for="picture" class="form-label">Picture</label>
            <input class="form-control" @change="onFileChange" type="file" id="picture" accept="image/*" required>
          </div>
          <div v-else class="d-flex flex-column gap-2 align-items-start">
            <img :src="form.picture" class="rounded-circle ms-2">
            <button @click="removeImage" class="btn btn-sm">Remove image</button>
          </div>
        </div>
        <div class="col-12">
          <label for="name" class="form-label">Name</label>
          <input v-model="form.name" type="text" class="form-control" id="name" minlength="5" required>
        </div>
        <div class="col-12">
          <label for="contact" class="form-label">Contact</label>
          <input v-model="form.contact" type="text" class="form-control" minlength="9" maxlength="9" id="contact">
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
export default {
  emits: ['onSubmit'],
  props: {
    contact: Object,
    error: String
  },
  data() {
    return {
      form: {
        id: this.contact?.id || null,
        name: this.contact?.name || null,
        contact: this.contact?.contact || null,
        email: this.contact?.email || null,
        picture: this.contact?.picture || null
      }
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files || e.dataTransfer.files

      if(!file.length) {
        return
      }
      this.createImage(file[0])
    },
    createImage(file) {
      let vm = this
      let reader = new FileReader()

      reader.onload = (e) => {
        vm.form.picture = e.target.result
      }

      reader.readAsDataURL(file);
    },
    removeImage() {
      this.form.picture = null
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