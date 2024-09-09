import { defineStore } from "pinia";
import DashboardApis from "@/services/apis/DashboardApis";

const api = DashboardApis;

export const useDashboardStore = defineStore("DashboardStore", {
	state: () => ({
		isSuccessful: false,
		totalProducts: 0,
	}),
	getters: {
		getIsSuccessful: (state) => !!state.isSuccessful,
		getTotalProducts: (state) => !!state.totalProducts,
	},
	actions: {
		async getProducts() {
			try {
				const response = await api.getProducts();
				this.totalProducts = response.data.data;
			} catch (error) {
				return error;
			}
		},

		async createProduct(credentials) {
			try {
				const response = await api.createProduct(credentials);
				this.isSuccessful = response.data.success;
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
});
