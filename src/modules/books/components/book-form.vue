<template>
    <div>
        <div class="row mt-5">
            <div class="col-md-4 mb-3">
                <img :src="source" class="card-img-top" alt="book cover">
            </div>
            <div class="col-md-8 mb-3">
                <form class="mb-4">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" v-model="book.title" name="title" class="form-control" autofocus>
                    </div>
                    <div class="form-group">
                        <label for="author">Author</label>
                        <input type="text" v-model="book.author" name="author" class="form-control" autofocus>
                    </div>
                    <div class="form-group">
                        <label for="desc">Description</label>
                        <textarea v-model="book.desc" name="desc" cols="30" rows="4" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="detail">Detail</label>
                        <textarea v-model="book.detail" name="detail" cols="30" rows="8" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="pic">Image URL</label>
                        <input type="text" v-model="book.pic" name="pic" class="form-control">
                    </div>
                    <button v-if="!flagEdit" type="button" class="btn btn-primary mr-2" @click="createBook">Create</button>
                    <router-link v-if="!flagEdit" :to="{ name: 'book-list' }" class="btn btn-light mr-2">Back</router-link>
                    <button v-if="flagEdit" type="button" class="btn btn-primary mr-2" @click="updateBook(book.id)">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import bookService from '../common/book.service';
    import defaultImage from '@/assets/images/placeholder-image120x120.png';
    export default {
        name: 'BookForm',

        data() {
            return {
                book: {
                    title: '',
                    author: '',
                    desc: '',
                    detail: '',
                    pic: '',
                },
                flagEdit: false,
            };
        },

        watch: {
            // call again the method if the route changes
            $route: 'fetchData',
        },

        methods: {
            fetchData() {
                if (this.$route.name === 'book-edit') {
                    this.getBook(this.$route.params.id);
                    this.flagEdit = true;
                } else {
                    this.book = {
                        title: '',
                        author: '',
                        desc: '',
                        detail: '',
                        pic: '',
                    };
                    this.flagEdit = false;
                }
            },

            async createBook() {
                try {
                    const res = await bookService.create(this.book);
                    this.$notify({
                            group: 'alert',
                            type: 'success',
                            title: 'Success',
                            text: 'Book created was successful!',
                        });
                    console.log(res);
                    this.$router.push({ name: 'book-list'});
                } catch (error) {
                    this.$notify({
                            group: 'alert',
                            type: 'danger',
                            title: 'Error',
                            text: 'Book can\'t create!',
                        });
                }

            },

            async getBook(bookId) {
                try {
                    const res = await bookService.getItem(bookId);
                    this.book = res.data;
                } catch (error) {
                    console.log(error);
                }
            },

            async updateBook(bookId) {
                try {
                    const res = await bookService.update(bookId, this.book);
                    this.$notify({
                            group: 'alert',
                            type: 'success',
                            title: 'Success',
                            text: 'Book updated was successful!',
                        });
                    // console.log(res);
                    this.$router.push({ name: 'book-detail', params: { id: bookId }});
                } catch (error) {
                    this.$notify({
                            group: 'alert',
                            type: 'danger',
                            title: 'Error',
                            text: 'Book can\'t update!',
                        });
                }
            },
        },

        computed: {
            source() {
                return this.book.pic || defaultImage;
            },
        },

        mounted() {
            this.fetchData();
        },
    };
</script>

<style lang="scss" scoped>

</style>