import axios from "@/plugins/AxiosConfig";

export default {
	getUser() {
		return axios.get("/user");
	},

	// getProductsCount() {
	//     return axios.get('/')
	// },
};
