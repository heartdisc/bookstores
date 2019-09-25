<template>
    <div>
        <h2 class="text-center my-4">หนังสือออกใหม่</h2>

        <div class="row ">
            <div class="col-md-3 d-flex align-items-stretch mb-3" v-for="book in books" :key="book.id">
                <div class="card ">
                    <img :src="book.pic || defaultImage" class="card-img-top" alt="book cover">

                    <div class="card-body">
                        <router-link tag="h5" :to="{ name: 'book-detail', params: { id: book.id } }" class="card-title link">{{ book.title }}</router-link>
                        <p class="card-text">{{ book.desc }}</p>
                    </div>
                    <div class="card-footer">
                        <!-- <router-link :to="{ name: 'book-detail', params: { id: book.id } }" class="btn btn-secondary mr-2">Read More</router-link> -->
                        <router-link :to="{ name: 'book-edit', params: { id: book.id } }" class="btn btn-light float-right">Edit</router-link>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    import bookService from '../common/book.service';
    import defaultImage from '@/assets/images/placeholder-image120x120.png';

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
                defaultImage,
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

        computed: {
            source(pic) {
                return pic || defaultImage;
            },
        },

        mounted() {
            this.getBooks();
        },
    };
</script>

<style lang="scss" scoped>

</style>