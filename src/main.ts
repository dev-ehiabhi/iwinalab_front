import './assets/main.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import axios from './plugins/axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(axios, {
//     baseUrl: 'http://localhost:8000/api/v1',
// })

app.mount('#app')
