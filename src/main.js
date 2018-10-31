// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Input,Form,FormItem,Button,Loading,Checkbox,Message,MessageBox} from 'element-ui';
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Loading);
Vue.use(Checkbox);
Vue.config.productionTip = false
Vue.prototype.$loading = Loading.service
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
