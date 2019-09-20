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
#app {
  font-family: 'sarabun', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
