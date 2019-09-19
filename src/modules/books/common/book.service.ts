import http from '@/shared/services/http.service';

const bookService = {
    async getList() {
        return await http.get(`/books`);
    },

    async getItem(id: string) {
        return await http.get(`/books/${id}`);
    },

    async create(book: any) {
        return await http.post(`/books/`, book);
    },

    async update(id: string, book: any) {
        return await http.put(`/books/${id}`, book);
    },

    async delete(id: string, book: any) {
        return await http.delete(`/books/${id}`, book);
    },
};

export default bookService;
