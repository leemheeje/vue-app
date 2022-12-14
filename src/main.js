import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import myMixin from './mixin'
import '@/assets/css/animate.css'
import '@/assets/css/common.css'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp({
	extends: App,
	//mixins: [myMixin]
});
app.config.globalProperties.$http = axios
app.config.globalProperties.API_PATH_STATIC = '//localhost:5500/static_api'
app.use(store).use(router).mount('#app')
