import { defineStore } from "pinia";

export const useShoppingcartStore = defineStore("ShoppingcartStore", {
	state: () => ({
		cart: [],
	}),

	getters: {
		getCart() {
			return this.cart;
		},
	},

	actions: {
		addToCart(product) {
			const exists = this.cart.find((item) => item.id === product.id);
			if (!exists) {
				this.cart.push(product);
			} else {
				console.log("Product already in cart");
			}
		},
	},
	persist: true,
});
