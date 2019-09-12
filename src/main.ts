import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Importing the global css file
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/blog.css';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
