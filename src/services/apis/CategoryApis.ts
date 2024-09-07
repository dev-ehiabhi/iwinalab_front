import axios from "@/plugins/AxiosConfig";

export default {
	getCategories() {
		return axios.get("/categories");
	},
};
