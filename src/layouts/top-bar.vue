<template>
    <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex">
            <router-link 
                class="p-2 text-muted" 
                :to="{name: 'book-list'}">Book List</router-link>
            <router-link 
                class="p-2 text-muted" 
                :to="{name: 'book-detail', params:{id: 12} }">Book Detail</router-link>
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