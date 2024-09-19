import { defineStore } from "pinia";
// import AuthApis from "@/services/apis/AuthApis";

// const api = AuthApis;

export const useAuthStore = defineStore(
	"authStore",
	{
		state: () => ({
			isAuthenticated: false || localStorage.getItem("loggedIn"),
			token: "" || localStorage.getItem("token"),
			user: {},
			first_name: "" || localStorage.getItem("first_name"),
			last_name: "" || localStorage.getItem("last_name"),
		}),
		getters: {
			getIsAuthenticated: (state) =>
				state.isAuthenticated || localStorage.getItem("loggedIn"),
			getToken: (state) => state.token || localStorage.getItem("token"),
			getUser: (state) => state.user,
			getFirstName() {
				return localStorage.getItem("first_name");
			},
			getLastName() {
				return localStorage.getItem("last_name");
			},
		},
		actions: {
			setToken(token) {
				this.token = token;
				localStorage.setItem("token", token);
			},

			setIsAuthenticated(status) {
				this.isAuthenticated = status;
				localStorage.setItem("loggedIn", status);
			},

			loginUser(user) {
				this.$state.user = user;
				localStorage.setItem("userId", user.id);
				localStorage.setItem("first_name", user.first_name);
				localStorage.setItem("last_name", user.last_name);
			},
		},
	},
	{
		persist: true,
	}
);

export default useAuthStore;
