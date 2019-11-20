import Vue from 'vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css' // a modern alternative to CSS resets
import 'src/styles/index.scss' // global css
import './icon/font/iconfont.js'


import App from './App.vue';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
