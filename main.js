import Vue from 'vue'
import App from './App'
import ClUni from 'cl-uni'

Vue.use(ClUni, {
	homePage: "/"
})
Vue.config.productionTip = false
Vue.prototype.baseUrl = 'http://192.168.1.110:8080/'; 

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
