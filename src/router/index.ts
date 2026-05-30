import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Habits from '@/views/Habits.vue';

const routes = [
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
    meta: { layout: 'auth' },
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    meta: { layout: 'auth' },
    component: () => import('@/views/auth/Registration.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
