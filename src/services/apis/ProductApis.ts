import axios from '@/plugins/AxiosConfig'

export default {
    createProduct(data: any) {
        return axios.post('/product', data)
    },

    updateProduct(data: any) {
        return axios.put('/product', data)
    },

    getProducts() {
        return axios.get('/product')
    },

    showProduct(id: string) {
        return axios.get('/product'+id)
    },

    deleteProduct(id: string) {
        return axios.delete('/product'+id)
    }
}
