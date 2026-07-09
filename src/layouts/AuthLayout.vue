<template>
  <main class="tracker-auth">
    <div class="tracker-auth__content">
      <RouterView />
    </div>
    <div class="tracker-auth__promo">
      Содержимое промо
    </div>
  </main>
</template>

<script setup lang="ts">
  import { type Component } from 'vue';

  defineOptions({
    name: 'AuthLayout',
  });

  defineProps<{
    promoComponent?: Component;
  }>();
</script>

<style scoped lang="scss" src="@/assets/styles/layouts/auth.scss"></style>
