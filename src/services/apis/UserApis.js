import axios from "@/plugins/AxiosConfig";

export default {
	getUser(data) {
		return axios.get(`/users/${data}`);
	},
};
