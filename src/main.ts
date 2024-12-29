import { createApp } from 'vue'
import { createPinia } from 'pinia'
import plugins from '@/plugins'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(plugins)
app.use(createPinia())
app.use(router)

app.mount('#app')
