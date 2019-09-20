<template>
    <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex">
            <router-link
                class="p-2 text-muted"
                :to="{name: 'book-list'}">รายการหนังสือ</router-link>
            <router-link
                class="p-2 text-muted"
                :to="{name: 'book-create' }">เพิ่มหนังสือ</router-link>
            <router-link
                class="p-2 text-muted"
                :to="{name: 'book-edit', params: { id: 2 } }">แก้ไขหนังสือ</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'TopBar',
    };
</script>

<style lang="scss" scoped>

</style>