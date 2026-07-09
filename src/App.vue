<template>
  <Transition name="app-fade" mode="out-in">
    <component :is="layoutComponent" :promo-component="promoComponent">
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

  // Если промо компонент динамически уже загружен - возвращаем его
  const promoComponent = computed(() => {
    const promo = route.meta.promoComponent;

    if (promo && typeof promo === 'object' && 'render' in promo) {
      return promo;
    }

    if (typeof promo === 'function') {
      return defineAsyncComponent(() => (promo as () => Promise<any>)());
    }

    return undefined;
  });
</script>
