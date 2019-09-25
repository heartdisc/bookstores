<template>
  <div id="app" class="container">
    <notifications group="alert" position="top center"/>
    <top-header></top-header>
    <top-bar></top-bar>
    <router-view/>
  </div>
</template>

<script>
    import TopHeader from '@/layouts/top-header.vue';
    import TopBar from '@/layouts/top-bar.vue';

    export default {
        name: 'App',

        components: {
            TopHeader,
            TopBar,
        },
    };
</script>

<style>

</style>
