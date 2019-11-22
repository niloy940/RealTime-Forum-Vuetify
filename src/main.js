import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router: new VueRouter(routes),
  vuetify,
  render: h => h(App)
}).$mount('#app')
