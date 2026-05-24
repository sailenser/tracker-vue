<template>
  <main class="page-content">
    <div class="page-content__wrapper">
      <div class="page-aside page-content__aside">
        Aside
      </div>
      <div class="page-content__stage">
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup>
defineOptions({
  name: 'DashboardLayout',
})
</script>