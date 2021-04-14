import Vue from 'vue'

import { Button, Row } from 'element-ui';
Vue.component(Button.name, Button);
/* 或写为
 * Vue.use(Button)
 */
Vue.use(Row)

import App from './App.vue'

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})