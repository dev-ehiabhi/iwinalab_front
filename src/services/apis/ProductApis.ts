import axios from "@/plugins/AxiosConfig";

export default {
	createProduct(data: any) {
		return axios.post("/products", data);
	},

	updateProduct(data: any) {
		return axios.put("/products", data);
	},

	getProducts() {
		return axios.get("/products");
	},

	showProduct(id: string) {
		return axios.get("/products" + id);
	},

	deleteProduct(id: string) {
		return axios.delete("/products" + id);
	},

	// getCategories() {
	// 	return axios.get("/categories");
	// },
};
