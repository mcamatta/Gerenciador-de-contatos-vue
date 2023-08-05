<template>
  <header>
    <nav class="navbar bg-light mb-3 py-3">
      <div class="container">
        <h1>
          <RouterLink to="/" class="navbar-brand fs-2">AlfaSoft Contacts</RouterLink>
        </h1>
      </div>
    </nav>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
