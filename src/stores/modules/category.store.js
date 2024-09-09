import { defineStore } from "pinia";
import CategoryApis from "@/services/apis/CategoryApis";

const api = CategoryApis;

export const useCategoryStore = defineStore("CategoryStore", {
	state: () => ({
		isSuccessful: false,
		categories: {},
	}),

	getters: {
		getIsSuccessful: (state) => !!state.isSuccessful,
		getCategories() {
			return this.categories;
		},
	},

	actions: {
		async fetchCategories() {
			this.isSuccessful = false;
			try {
				const response = await api.getCategories();
				this.isSuccessful = response.data.success;
				this.categories = response.data.data;
			} catch (error) {
				return error;
			}
		},
	},
});
