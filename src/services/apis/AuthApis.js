import axios from "@/plugins/AxiosConfig";

export default {
	registerUser(data) {
		return axios.post("/register", data);
	},

	loginUser(data) {
		return axios.post("/login", data);
	},

	logoutUser() {
		return axios.post("/logout");
	},
};
