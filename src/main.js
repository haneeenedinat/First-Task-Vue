import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';

createApp(App).mount('#app')




Vue.use(VueRouter);

import SinglePage from "./components/SinglePage.vue";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/SinglePage', component: SinglePage },
  ]
});

new Vue({
  router,

}).$mount('#app');
