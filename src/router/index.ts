import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue';
import Habits from '@/views/Habits.vue';
import Login from '@/views/auth/Login.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/habits',
        name: 'habits',
        component: Habits
    },
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'auth' },
        component: Login
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;