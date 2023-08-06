<template>
  <header>
    <nav class="navbar bg-light mb-5 py-3">
      <div class="container">
        <h1>
          <RouterLink to="/" class="navbar-brand fs-2">AlfaSoft Contacts</RouterLink>
        </h1>
        <RouterLink v-if="!isAuthenticate" to="/login" class="fs-5">Login</RouterLink>
        <a v-else class="fs-5">Logout</a>
      </div>
    </nav>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticate: localStorage.getItem('auth') === 'true'
    }
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
