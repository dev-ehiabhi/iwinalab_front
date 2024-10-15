import { defineStore } from "pinia";
import RequiredDocumentsApis from "@/services/apis/RequiredDocumentsApis";

const api = RequiredDocumentsApis;

export const useRequiredDocumentsStore = defineStore("RequiredDocumentsStore", {
	state: () => ({
		isSuccessful: false,
		requiredDocuments: {},
	}),

	getters: {
		getIsSuccessful: (state) => !!state.isSuccessful,
		getRequiredDocuments() {
			return this.requiredDocuments;
		},
	},

	actions: {
		async fetchRequiredDocuments() {
			this.isSuccessful = false;
			try {
				const response = await api.getRequiredDocuments();
				this.isSuccessful = response.data.success;
				this.requiredDocuments = response.data.data;
			} catch (error) {
				return error;
			}
		},
	},
});
