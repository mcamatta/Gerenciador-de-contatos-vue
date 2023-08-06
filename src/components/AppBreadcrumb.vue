<template>
  <div class="mb-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(item, i) in items" :key="i" :class="[i == items.length - 1 ? 'active' : '', 'breadcrumb-item']">
          <RouterLink v-if="i != items.length - 1" :to="item.url">{{ item.name }}</RouterLink>
          <span v-else>{{ item.name }}</span>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    items: Array
  }
}
</script>