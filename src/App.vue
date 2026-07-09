<template>
  <Transition name="app-fade" mode="out-in">
    <component :is="layoutComponent">
      <RouterView v-slot="{ Component, route }">
        <div v-if="Component" :key="route.matched[0]?.name">
          <Suspense>
            <component :is="Component" />
          </Suspense>
        </div>
      </RouterView>
    </component>
  </Transition>
</template>

<script setup lang="ts">
  import { computed, type Component, defineAsyncComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import DashboardLayout from '@/layouts/DashboardLayout.vue';
  import AuthLayout from '@/layouts/AuthLayout.vue';
  import DefaultLayout from '@/layouts/DefaultLayout.vue';

  type LayoutName = 'default' | 'auth' | 'dashboard';

  const layouts: Record<LayoutName, Component> = {
    default: DefaultLayout,
    auth: AuthLayout,
    dashboard: DashboardLayout,
  };

  const route = useRoute();

  const layoutComponent = computed<Component>(() => {
    const layout = (route.meta.layout as LayoutName) ?? 'default';

    return layouts[layout];
  });
</script>
