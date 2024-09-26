import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
	state: () => ({
		user: {},
	}),
	getters: {
		isLoggedIn: (state) => !!state.user,
		getUser() {
			return this.user;
		},
	},
	actions: {
		setUser(user) {
			this.user = user;
		},

		async fetchUser() {
			// const user = await userService.fetchUser();
			// this.user = {name: 'yuyuy'}
		},
	},
});
