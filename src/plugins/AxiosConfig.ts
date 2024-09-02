import { useLoginStore } from '@/stores/login_store'
import axios from 'axios'
import router from '@/router'

const url = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000/api/v1' : 'https://api.iwinalab.com/api/v1'

const AxiosConfig = axios.create({
    baseURL: url,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true
    }
})


AxiosConfig.interceptors.request.use(config => {
    const loginStore = useLoginStore()
    config.headers.Authorization = `Bearer ${loginStore.getToken}` || null
    return config;
})

AxiosConfig.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        localStorage.removeItem('TOKEN')
        router.push({name: 'Login'})
    } else if (error.response.status === 404) {
        router.push({name: 'NotFound'})
    }
    throw error;
})


export default AxiosConfig




// import axios from 'axios'
// import type {App} from 'vue'

// interface AxiosOptions {
//     baseUrl?: string
//     token?: string
// }


// export default {
//     install: (app: App, options: AxiosOptions) => {
//         app.config.globalProperties.$axios = axios.create({
//             baseURL: 'http://localhost:8000/api/v1',
//             headers: {
//                 Authorization: options.token ? `Bearer ${options.token}` : '',
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': true
//             }
//         })
//     }
// }