<template>
  <main class="page-content">
    <nav>
      <ul>
        <li
            v-for="item in menuItems"
            :key="item.route"
        >
          <router-link
              :to="{ name: item.route }"
              class="nav-link"
              active-class="active"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>

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

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'DashboardLayout',
})

interface MenuItem {
  route: string
  title: string
  exact: boolean
}

const menuItems = ref<MenuItem[]>([
  { route: 'home', title: 'home', exact: true },
  { route: 'habits', title: 'habits', exact: true },
  { route: 'login', title: 'login', exact: true },
])
</script>