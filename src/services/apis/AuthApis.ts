import axios from '@/plugins/AxiosConfig'


// interface Data {
//     email: string,
//     password: string
// }

export default {
    registerUser(data: any) {
        return axios.post('/register', data)
    },

    loginUser(data: any) {
        return axios.post('/login', data)
    },

    // getAnalysis() {
    //     return axios.get('/admin/analysis')
    // },

    logoutUser() {
        return axios.post('/logout')
    }
}
