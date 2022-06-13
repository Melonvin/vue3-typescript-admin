import { createApp } from 'vue'
import App from './App.vue'

// vue-router
import router from './router'

import 'normalize.css'
import './styles/index.scss' // global css

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import pinia from './store'
import './permission'

const app = createApp(App)

app.use(router)
    .use(ElementPlus)
    .use(pinia)
    .mount('#app')

export default app