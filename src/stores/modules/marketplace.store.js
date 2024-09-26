import { defineStore } from "pinia";

export const useMarketplaceStore = defineStore("MarketplaceStore", {
	state: () => ({
		products: [],
		product: {},
	}),

	getters: {
		getProducts() {
			return this.products;
		},
		getProduct() {
			return this.product;
		},
	},

	actions: {
		setProducts(products) {
			this.products = products;
		},
		setProduct(product) {
			this.product = product;
		},
	},
	// persist: true,
});
