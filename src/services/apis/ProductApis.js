import axios from "@/plugins/AxiosConfig";

export default {
	createProduct(data) {
		return axios.post("/products", data);
	},

	updateProduct(data) {
		return axios.put(`/products/${id}`, data);
	},

	getProducts() {
		return axios.get("/products");
	},

	getUserProducts(id) {
		return axios.get(`/user/${id}/products`);
		// return axios.get("/own_products", { params: { id: data } });
	},

	showProduct(id) {
		return axios.get("/products/" + id);
	},

	deleteProduct(id) {
		return axios.delete("/products" + id);
	},

	// getCategories() {
	// 	return axios.get("/categories");
	// },
};
