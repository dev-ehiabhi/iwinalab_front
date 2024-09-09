import axios from "@/plugins/AxiosConfig";

export default {
	createProduct(data) {
		return axios.post("/products", data);
	},

	updateProduct(data) {
		return axios.put("/products", data);
	},

	getProducts() {
		return axios.get("/products");
	},

	showProduct(id) {
		return axios.get("/products" + id);
	},

	deleteProduct(id) {
		return axios.delete("/products" + id);
	},

	// getCategories() {
	// 	return axios.get("/categories");
	// },
};
