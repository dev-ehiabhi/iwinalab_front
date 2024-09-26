import axios from "@/plugins/AxiosConfig";

export default {
	getProducts() {
		return axios.get("/products");
	},

	getProduct(id) {
		return axios.get(`/products/${id}`);
	},
};
