const BookList = () => import('./components/book-list.vue');
const BookDetail = () => import('./components/book-detail.vue');
const BookForm = () => import('./components/book-form.vue');

const routes = [
    {
        path: '/books',
        name: 'book-list',
        component: BookList,
    },
    {
        path: '/books/create',
        name: 'book-create',
        component: BookForm,
    },
    {
        path: '/books/:id',
        name: 'book-detail',
        component: BookDetail,
    },
    {
        path: '/books/:id/edit',
        name: 'book-edit',
        component: BookForm,
    },
];

export default routes;
