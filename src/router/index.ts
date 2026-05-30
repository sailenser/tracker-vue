import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import Habits from '@/views/Habits.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { layout: 'auth' },
  },
  {
    path: '/habits',
    name: 'habits',
    component: Habits,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/auth/Registration.vue'),
    meta: { layout: 'auth' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
