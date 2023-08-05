<template>
    <div class="d-flex justify-content-between mb-3">
      <h2 class="m-0">Contact Details</h2>
      <RouterLink to="/" class="btn btn-primary fw-bold">Back</RouterLink>
    </div>
    <div>
        {{ $route.params }}
    </div>
</template>
<script>
export default {
    
}
</script>