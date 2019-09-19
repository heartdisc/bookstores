<template>
    <div>

        <div class="row mt-5">
            <div class="col-md-4 mb-3">
                <div class="card ">
                    <img src="@/assets/images/placeholder-image120x120.png" class="card-img-top" alt="book cover">
                </div>

            </div>
            <div class="col-md-8 mb-3">
                <h2 class="card-title mb-3">{{ book.title }}</h2>
                <p class="card-text">{{ book.desc }}</p>

                <p>

                    <router-link :to="{ name: 'book-edit', params: { id: book.id } }" class="btn btn-secondary">Edit</router-link>
                </p>

            </div>
        </div>

    </div>
</template>

<script>
    import bookService from '../common/book.service';
    export default {
        name: 'BookDetail',

        data() {
            return {
                book: {
                    id: 1,
                    title: 'Book 1',
                    desc: 'desc 1',
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

        mounted() {
            this.getBook(this.$route.params.id);
        },
    };
</script>

<style lang="scss" scoped>

</style>