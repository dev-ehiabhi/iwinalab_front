import useAuthStore from "@/stores/auth_store";
import axios from "axios";
import router from "@/router";

const url =
	process.env.NODE_ENV !== "production"
		? "http://localhost:8000/api/v1"
		: "https://admin.iwinalab.org/api/v1";

const AxiosConfig = axios.create({
	baseURL: url,
	headers: {
		Accept: "application/json",
		// "Content-Type": "application/json",
		"Content-Type": "multipart/form-data",
		"Access-Control-Allow-Origin": true,
	},
});

AxiosConfig.interceptors.request.use((config) => {
	const loginStore = useAuthStore();
	config.headers.Authorization = `Bearer ${loginStore.getToken}` || null;
	return config;
});

AxiosConfig.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			localStorage.removeItem("token");
			router.push({ name: "Login" });
			return response;
		} else if (error.response.status === 404) {
			router.push({ name: "NotFound" });
		} else if (!error.response) {
			console.log("Network Error");
		}
		throw error;
		// return Promise.reject(error);
	}
);

export default AxiosConfig;

// import axios from 'axios'
// import type {App} from 'vue'

// interface AxiosOptions {
//     baseUrl?: string
//     token?: string
// }

// export default {
//     install: (app: App, options: AxiosOptions) => {
//         app.config.globalProperties.$axios = axios.create({
//             baseURL: 'http://localhost:8000/api/v1',
//             headers: {
//                 Authorization: options.token ? `Bearer ${options.token}` : '',
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': true
//             }
//         })
//     }
// }
