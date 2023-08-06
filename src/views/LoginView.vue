<template>
  <AppBreadcrumb :items="[{ name: 'Home', url: { name: 'home' } }, { name: 'Login' }]" />
  <h2 class="mb-3">Login</h2>
  <div class="border p-4 w-50 mx-auto mt-4 rounded shadow">
    <form v-on:submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">E-mail address</label>
        <input type="email" v-model="form.email" @keydown="this.error = null" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="form.password" @keydown="this.error = null" class="form-control" id="password">
      </div>
      <p v-if="error" class="text-danger text-bold">{{ error }}</p>
      <button type="submit" class="btn btn-success fw-bold">Login</button>
    </form>
  </div>
</template>
<script>
import { auth } from '@/auth';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
export default {
  data() {
    return {
      form: {},
      error: null
    }
  },
  methods: {
    login() {
      if (auth.login(this.form)) {
        this.$router.push({
          name: 'home'
        })
      } else {
        this.error = 'Incorrect credentials'
      }
    }
  },
  components: { AppBreadcrumb }
}
</script>