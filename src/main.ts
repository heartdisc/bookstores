import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Notifications from 'vue-notification';

Vue.config.productionTip = false;
Vue.use(Notifications);

// Importing the global css file
// import '@/assets/scss/_variables.scss';
import 'bootstrap/scss/bootstrap.scss';
import '@/assets/scss/blog.css';
import '@/assets/fonts/sr-rojee-np/font.css';
import '@/assets/fonts/sarabun/font.css';
import '@/assets/fonts/ibm-plex/font.css';
import '@/assets/fonts/seed-icons/font.css';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
