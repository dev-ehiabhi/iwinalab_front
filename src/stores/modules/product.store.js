import { defineStore } from "pinia";
import ProductApis from "@/services/apis/ProductApis";

const api = ProductApis;

export const useProductStore = defineStore("ProductStore", {
	state: () => ({
		isSuccessful: false,
		products: [],
		product: {},
		responseMessage: "",
	}),
	getters: {
		getIsSuccessful: (state) => !!state.isSuccessful,
		getProducts() {
			return this.products;
		},
		getProduct() {
			return this.product;
		},
		getResponseMessage: (state) => !!state.responseMessage,
	},
	actions: {
		setProducts(products) {
			this.products = products;
		},

		setProduct(product) {
			this.product = product;
		},

		async fetchProducts() {
			this.isSuccessful = false;
			try {
				const response = await api.getProducts();
				this.isSuccessful = response.data.success;
				this.products = response.data.data;
				this.responseMessage = response.data.message;
			} catch (error) {
				return error;
			}
		},

		async createProduct(credentials) {
			this.isSuccessful = false;
			try {
				const response = await api.createProduct(credentials);
				this.isSuccessful = response.data.success;
				this.responseMessage = response.data.message;
			} catch (error) {
				return error;
			}
		},

		async updateProduct(credentials) {
			try {
				const response = await api.updateProduct(credentials);
				this.isSuccessful = response.data.success;
			} catch (error) {
				return error;
			}
		},
	},
	persist: {
		storage: localStorage,
		path: ["product"],
	},
});
