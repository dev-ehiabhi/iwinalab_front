import { defineStore } from "pinia";
import ProductApis from '@/services/apis/ProductApis'

const api = ProductApis;

export const useProductStore = defineStore('ProductStore', {    
    state: () => ({
        isCreated: false,
        products: {},
    }),
    getters: {
        getIsCreated: (state) => !!state.isCreated,
        getProducts: (state) => !!state.products,
    },
    actions: {        
        async getProducts() {
            try {
                const response = await api.getProducts()
                this.products = response.data.data
            } catch (error) {
                return error
            }
        },

        async createProduct(credentials: any) {
            try {
                const response = await api.createProduct(credentials)
                this.isCreated = response.data.success
            } catch (error) {
                return error
            }
        },

        async updateProduct(credentials: any) {
            try {
                const response = await api.updateProduct(credentials)
                this.isCreated = response.data.success
            } catch (error) {
                return error
            }
        },
    },
});