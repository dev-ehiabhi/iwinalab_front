import axios from "@/plugins/AxiosConfig";

export default {
	getRequiredDocuments() {
		return axios.get("/required-documents");
	},
};
