import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/vue',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/vue/list',
        component: () => import('../views/List.vue')
    },
];

export {
    routes
}

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});