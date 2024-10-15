<script setup>
import { onMounted, ref } from "vue";
import { useRequiredDocumentsStore } from "@/stores/modules/required_documents.store";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { useProductStore } from "@/stores/modules/product.store";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import ProductApis from "@/services/apis/ProductApis";
import { useUserStore } from "@/stores/modules/user.store";

const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.onmouseenter = Swal.stopTimer;
		toast.onmouseleave = Swal.resumeTimer;
	},
});

const router = useRouter();
const api = ProductApis;
const requiredDocumentsStore = useRequiredDocumentsStore();
const productStore = useProductStore();
const userStore = useUserStore();

requiredDocumentsStore.fetchRequiredDocuments();

const fetchUserProducts = async () => {
	await api
		.getUserProducts(userStore.getUser.id)
		.then((response) => {
			productStore.setProducts(response.data.data);
		})
		.catch((error) => {
			console.log(error.response);
		});
};

onMounted(async () => {
	await requiredDocumentsStore.fetchRequiredDocuments();
	fetchUserProducts();
});

// variables
let loading = ref(true);
let product_image = ref(null);
const document_id = ref("");
const product_id = ref("");
const name = ref("");
const price = ref(0);
const description = ref("");
const selectedList = ref([]);

const price_errors = ref([]);
const product_image_errors = ref([]);

// functions
const changeLoadingStatus = (val) => {
	loading.value = val;
};

const selectImage = (e) => {
	product_image.value = e.target.files[0];
};

const requestAudit = async () => {
	changeLoadingStatus(false);
	const data = {
		document_id: document_id.value,
		name: name.value,
		description: description.value,
		price: price.value,
		product_image: product_image.value,
		user_id: localStorage.getItem("userId"),
	};

	await api
		.requestAudit(data)
		.then((response) => {
			Toast.fire({
				icon: "success",
				title: response.data.message,
			});

			changeLoadingStatus(true);
			// router.push({ path: "/my-store/product-list" });
		})
		.catch((error) => {
			changeLoadingStatus(true);
			if (error.response.data.data.price) {
				price_errors.value = error.response.data.data.price;
			}
			if (error.response.data.data.product_image) {
				product_image_errors.value =
					error.response.data.data.product_image;
			}
		});
};

const updateSelected = (event, id) => {
	if (event.srcElement.checked) {
		selectedList.value.push(id);
		// selectedList.value.push(event.target.id);
	} else {
		selectedList.value = selectedList.value.filter((item) => item !== id);
	}
	// console.log(selectedList);
};
</script>

<template>
	<div class="w-full">
		<BreadCrumb prev="Audits" current="Request"></BreadCrumb>

		<div class="bg-white w-full border my-8 px-8 shadow-md rounded-lg">
			<p class="text-2xl font-semibold py-4">Audit Request Form</p>

			<p class="text-lg text-gray-500 py-4">Requestor Information</p>

			<form id="product" class="w-full">
				<!-- <form id="product" @submit.prevent="requestAudit()" class="w-full"> -->
				<!-- <fieldset class="w-full border space-y-1 text-gray-500">
					<label
						for="files"
						class="block text-center text-sm font-normal pt-8"
					>
						Upload Product Image
					</label>

					<div class="flex w-full">
						<input
							type="file"
							name="files"
							id="files"
							accept="image/*"
							@change="selectImage($event)"
							required
							class="w-full text-center px-8 py-8 rounded-md text-gray-600"
						/>
					</div>
					<p
						v-show="product_image_errors"
						v-for="error in product_image_errors"
						class="text-red-400 text-xs"
					>
						{{ error }}
					</p>
				</fieldset> -->

				<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
					<div>
						<select
							id="products"
							name="products"
							v-model="product_id"
							required
							class="block w-full px-4 py-2 capitalize text-gray-400 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring"
						>
							<option value="" selected class="capitalize">
								Select Product
							</option>
							<option
								v-for="(
									product, index
								) in productStore.getProducts"
								:key="index"
								:value="product.id"
								class="bg-slate-100 text-gray-400 capitalize"
							>
								{{ product.name }}
							</option>
						</select>
					</div>

					<!-- <div>
						<fieldset class="w-full space-y-1 text-gray-800">
							<div class="flex">
								<input
									v-model="doc_title"
									id="doc_title"
									type="text"
									placeholder="Document Title"
									required
									class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-gray-300 focus:outline-none focus:ring"
								/>
							</div>
						</fieldset>
					</div> -->

					<!-- <div>
						<fieldset class="w-full space-y-1 text-gray-800">
							<div class="flex">
								<input
									v-model="issuing_agency"
									id="issuing_agency"
									type="text"
									placeholder="Issuing Agency"
									required
									class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-gray-300 focus:outline-none focus:ring"
								/>
								
							</div>
							
						</fieldset>
					</div> -->

					<!-- <div>
						<fieldset class="w-full space-y-1 text-gray-800">
							<div class="flex">
								<input
									v-model="audit_scope"
									id="audit_scope"
									type="text"
									placeholder="Audit Scope"
									required
									class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-gray-300 focus:outline-none focus:ring"
								/>
								
							</div>
							
						</fieldset>
					</div> -->
				</div>

				<!-- <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
					<div class="flex">
						<select
							id="documents"
							name="documents"
							v-model="document_id"
							required
							class="block w-full px-4 py-2 text-gray-400 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring"
						>
							<option value="" selected>
								Select Acquired Document
							</option>
							<option
								v-for="(
									document, index
								) in requiredDocumentsStore.getRequiredDocuments"
								:key="document.id"
								:value="document.id"
								class="bg-slate-100 text-gray-400"
							>
								{{ document.title }}
							</option>
						</select>
					</div>					
				</div> -->

				<div class="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
					<div
						v-for="(
							document, index
						) in requiredDocumentsStore.getRequiredDocuments"
						:key="document.id"
						class="flex"
					>
						<input
							class="text-gray-400 w-4"
							type="checkbox"
							@change="updateSelected($event, document.id)"
						/>
						<span class="mx-4">{{ document.title }}</span>
					</div>
				</div>

				<div class="mt-8">
					<textarea
						v-model="description"
						id="description"
						type="text"
						placeholder="Description of request"
						required
						class="block w-full px-4 py-2 capitalize text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-gray-300 focus:outline-none focus:ring"
					></textarea>
				</div>

				<div class="py-8"></div>

				<div class="flex justify-end my-6">
					<RouterLink
						to="/compliance-tools"
						class="bg-slate-50 px-8 py-2.5 mr-4 leading-5 border transition-colors duration-300 transform rounded-md focus:outline-none"
					>
						Cancel
					</RouterLink>
					<button
						v-if="loading"
						type="button"
						class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:bg-lime-500"
					>
						Submit Request
					</button>
					<button
						v-else
						type="button"
						disabled
						class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:bg-lime-500"
					>
						<span><LoadingIndicator></LoadingIndicator></span>
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
