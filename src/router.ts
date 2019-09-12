import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

Vue.use(Router);

import bookRoutes from '@/modules/books/book.routes';

const baseRoutes = [
    {
        path: '',
        redirect: { name: 'book-list' },
    },
    {
        path: '*',
        component: () => import('@/layouts/page-not-found.vue'),
    },
];

const routes = baseRoutes.concat(
    bookRoutes,
);

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes,
});
