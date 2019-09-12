// const VpsLayout = () => import('@/layouts/VpsLayout.vue');
const BookList = () => import('./components/book-list.vue');
const BookDetail = () => import('./components/book-detail.vue');

const routes = [
    {
        path: '/books',
        name: 'book-list',
        component: BookList,
    },
    {
        path: '/books/:id',
        name: 'book-detail',
        component: BookDetail,
    },
];

export default routes;
