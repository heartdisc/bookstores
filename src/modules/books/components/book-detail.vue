<template>
    <div>

        <div class="row mt-5">
            <div class="col-md-4 mb-3">
                <div class="card ">
                    <img :src="source" class="card-img-top" alt="book cover">
                </div>

            </div>
            <div class="col-md-8 mb-3">
                <h2 class="card-title mb-3">{{ book.title }}</h2>
                <div class="font-weight-bold mb-3">{{ book.author }}</div>
                <p class="card-text book-detail" >{{ book.detail }}</p>

                <p>
                    <router-link :to="{ name: 'book-edit', params: { id: book.id } }" class="btn btn-primary mr-2">Edit</router-link>
                    <router-link :to="{ name: 'book-list' }" class="btn btn-light mr-2">Back</router-link>
                </p>

            </div>
        </div>

    </div>
</template>

<script>
    import bookService from '../common/book.service';
    import defaultImage from '@/assets/images/placeholder-image120x120.png';
    export default {
        name: 'BookDetail',

        data() {
            return {
                book: {
                    id: 1,
                    title: 'Book 1',
                    author: '',
                    desc: 'desc 1',
                    detail: 'desc 1',
                    comments: [],
                },
            };
        },

        methods: {
            async getBook(bookId) {
                try {
                    const res = await bookService.getItem(bookId);
                    this.book = res.data;

                } catch (error) {
                    console.log(error);
                }
            },
        },

        computed: {
            source() {
                return this.book.pic || defaultImage;
            },
        },

        mounted() {
            this.getBook(this.$route.params.id);
        },
    };
</script>

<style lang="scss" >
.book-detail {
    white-space: pre-line;
}
</style>