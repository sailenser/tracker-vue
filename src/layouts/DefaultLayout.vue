<template>
  <main class="tracker-default">
    <slot />
  </main>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'DefaultLayout',
  });
</script>
