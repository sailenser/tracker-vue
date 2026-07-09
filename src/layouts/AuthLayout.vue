<template>
  <main class="tracker-auth">
    <slot />
    <div class="tracker-auth__promo">
      <component v-if="promoComponent" :is="promoComponent" />
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
