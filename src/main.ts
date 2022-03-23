import { createApp } from 'vue'
import App from './App.vue'

// vue-router
import router from './router'

import 'normalize.css'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
