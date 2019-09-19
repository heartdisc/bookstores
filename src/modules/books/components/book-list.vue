<template>
    <div>
        <h2 class="text-center my-4">รายการหนังสือ</h2>

        <div class="row ">
            <div class="col-md-4 mb-3" v-for="book in books" :key="book.id">
                <div class="card ">
                    <img src="@/assets/images/placeholder-image120x120.png" class="card-img-top" alt="book cover">
                    <div class="card-body">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="card-text">{{ book.desc }}</p>
                    </div>
                    <div class="card-footer">
                        <router-link :to="{ name: 'book-detail', params: { id: book.id } }" class="btn btn-secondary mr-2">Read More</router-link>
                        <router-link :to="{ name: 'book-edit', params: { id: book.id } }" class="btn btn-secondary">Edit</router-link>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    import bookService from '../common/book.service';

    export default {
        name: 'BookList',

        data() {
            return {
                books: [
                    {
                        id: 1,
                        title: 'Book 1',
                        desc: 'desc 1',
                    },
                    {
                        id: 2,
                        title: 'Book 2',
                        desc: 'desc 2',
                    },
                    {
                        id: 3,
                        title: 'Book 3',
                        desc: 'desc 3',
                    },
                ],
            };
        },

        methods: {
            getList() {
                bookService
                    .getList()
                    .then( (res) => {
                        this.books = res.data;
                        // console.log(res.data);
                    })
                    .catch( (error) => {
                        console.log('error');
                    });

            },
            async getBooks() {
                try {
                    const res = await bookService.getList();
                    this.books = res.data;
                } catch (error) {
                    console.log(error);
                }
            },
        },

        mounted() {
            this.getBooks();
        },
    };
</script>

<style lang="scss" scoped>

</style>