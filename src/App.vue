<template>
  <header>
    <nav class="navbar bg-light mb-5 py-3">
      <div class="container">
        <h1>
          <RouterLink to="/" class="navbar-brand fs-2">Contact Management</RouterLink><br>
        </h1>
        <RouterLink v-if="!auth.isAuthenticate" to="/login" class="fs-5">Login</RouterLink>
        <a href="#" v-else class="fs-5" @click="auth.logout">Logout</a>
      </div>
    </nav>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>

<script>
import { auth } from '@/auth'

export default {
  setup() {
    return { auth }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
