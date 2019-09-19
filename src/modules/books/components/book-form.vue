<template>
    <div>
        <form >
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="book.title" name="title" class="form-control" autofocus>
            </div>
            <div class="form-group">
                <label for="desc">Description</label>
                <textarea  v-model="book.desc" name="desc" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <button v-if="!flagEdit" type="submit" class="btn btn-primary" @click="createBook">Create</button>
            <button v-if="flagEdit" type="submit" class="btn btn-primary" @click="updateBook">Update</button>
        </form>
    </div>
</template>

<script>
import bookService from '../common/book.service';
    export default {
        name: 'BookForm',

        data() {
            return {
                book: {
                    title: '',
                    desc: '',
                },
                flagEdit: false,
            }
        },

        methods: {
            async createBook() {
                try {
                    const res = await bookService.create(this.book);
                    console.log(res);
                } catch (error) {
                    console.log(error);
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
                    console.log(res)
                } catch (error) {
                    console.log(error);
                }
            }
        },

        mounted () {
            if (this.$route.name === 'book-edit') {
                this.getBook(this.$route.params.id);
                this.flagEdit = true;
            } else {
                this.book = {
                    title: '',
                    desc: '',
                };
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>