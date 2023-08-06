<template>
  <div class="border p-4 w-50 mx-auto mt-4 rounded shadow">
    <form v-on:submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" v-model="form.email" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-success fw-bold">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      credentials: {
        email: 'camattamichel@gmail.com',
        password: '123456',
      }
    }
  },
  methods: {
    login() {
      if(JSON.stringify(this.credentials) === JSON.stringify(this.form)) {
        localStorage.setItem('auth', true);
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
}
</script>