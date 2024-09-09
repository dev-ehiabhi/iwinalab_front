import { defineStore } from "pinia";
import AuthApis from "@/services/apis/AuthApis";

const api = AuthApis;

// interface State {
// 	isLoading: boolean;
// 	isSuccessful: boolean;
// 	isAuthenticated: boolean;
// 	token: string | null;
// 	responseMessage: string;
// 	user: Object;
// }

export const useAuthStore = defineStore("useAuthStore", {
	state: () => ({
		isLoading: false,
		isSuccessful: false,
		isAuthenticated: false,
		token: "",
		responseMessage: "",
		user: {},
	}),
	getters: {
		getIsLoading: (state) => state.isLoading,
		getIsSuccessful: (state) => state.isSuccessful,
		getIsAuthenticated: (state) =>
			state.isAuthenticated || localStorage.getItem("loggedin"),
		getToken: (state) => state.token || localStorage.getItem("token"),
		getResponseMessage: (state) => state.responseMessage,
		getUser: (state) => state.user,
		getFirstName() {
			return localStorage.getItem("firstName");
		},
		getLastName() {
			return localStorage.getItem("lastName");
		},
	},
	actions: {
		async registerUser(credentials) {
			try {
				const response = await api.registerUser(credentials);
				this.isSuccessful = response.data.success;
				this.responseMessage = response.data.message;
				// showTooltip(`Welcome back ${this.userData.name}!`)
			} catch (error) {
				// showTooltip(error)
				// let the form component display the error
				return error;
			}
		},

		async loginUser(credentials) {
			this.responseMessage = "";
			try {
				const response = await api.loginUser(credentials);
				this.isSuccessful = response.data.success;
				this.token = response.data.data.token;
				localStorage.setItem("token", response.data.data.token);
				this.isAuthenticated = response.data.success;
				localStorage.setItem("loggedin", response.data.success);
				this.user = response.data.data.user;
				localStorage.setItem("userId", response.data.data.user.id);
				localStorage.setItem(
					"firstName",
					response.data.data.user.first_name
				);
				localStorage.setItem(
					"lastName",
					response.data.data.user.last_name
				);
				this.responseMessage = response.data.message;
				// showTooltip(`Welcome back ${this.userData.name}!`)
			} catch (error) {
				// showTooltip(error)
				// let the form component display the error
				return error;
			}
		},
		async logoutUser() {
			this.responseMessage = "";
			try {
				const response = await api.logoutUser();
				this.isSuccessful = response.data.success;
				this.isAuthenticated = false;
				this.responseMessage = response.data.message;
				localStorage.clear();
			} catch (error) {
				return error;
			}
		},
	},
});
