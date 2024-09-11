<script setup>
import { onMounted, ref } from "vue";
import { useCategoryStore } from "@/stores/modules/category.store";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { useProductStore } from "@/stores/modules/product.store";
import Swal from "sweetalert2";

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

const categoryStore = useCategoryStore();
const productStore = useProductStore();

categoryStore.fetchCategories();

onMounted(async () => {
	await categoryStore.getCategories;
});

//

let product_image = ref(null);

const selectImage = (e) => {
	product_image.value = e.target.files[0];
};

const category_id = ref("");
const name = ref("");
const price = ref(0);
const description = ref("");

const createProduct = async () => {
	const data = {
		category_id: category_id.value,
		name: name.value,
		description: description.value,
		price: price.value,
		product_image: product_image.value,
		user_id: localStorage.getItem("userId"),
	};

	await productStore.createProduct(data).then(() => {
		if (productStore.getIsSuccessful) {
			Toast.fire({
				icon: "success",
				title: productStore.getResponseMessage,
			});

			this.$router.push({ path: "/products/product-list" });
		}
	});
};
</script>

<template>
	<div class="w-full">
		<BreadCrumb prev="Products" current="Add New Product"></BreadCrumb>

		<div class="bg-white w-full border my-8 px-8 shadow-md rounded-lg">
			<p class="text-2xl font-semibold p-4">Add New Product</p>

			<p class="text-lg text-gray-500 p-4">File the form below</p>

			<form id="product" @submit.prevent="createProduct()" class="w-full">
				<fieldset class="w-full border space-y-1 text-gray-500">
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
							class="w-full text-center px-8 py-8 rounded-md text-gray-600"
						/>
					</div>
				</fieldset>

				<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
					<div>
						<select
							id="categories"
							name="categories"
							v-model="category_id"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring"
						>
							<option selected>Select Product Category</option>
							<option
								v-for="(
									category, index
								) in categoryStore.getCategories"
								:key="index"
								:value="category.id"
								class="bg-slate-100 text-gray-400"
							>
								{{ category.name }}
							</option>
						</select>
					</div>

					<div>
						<input
							v-model="name"
							id="name"
							type="text"
							placeholder="Product Name"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring"
						/>
					</div>

					<div>
						<fieldset class="w-full space-y-1 text-gray-800">
							<div class="flex">
								<!-- <input
									type="text"
									name="price"
									id="price"
									placeholder="99 999,99"
									class="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ring-inset border-gray-300 text-gray-800 bg-gray-100 focus:ring-violet-600"
								/> -->
								<input
									v-model="price"
									id="price"
									type="number"
									placeholder="Price"
									class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-l-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-gray-300 focus:outline-none focus:ring"
								/>
								<span
									class="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-gray-300"
									>N</span
								>
							</div>
						</fieldset>
					</div>
				</div>

				<div class="mt-8">
					<textarea
						v-model="description"
						id="description"
						type="text"
						placeholder="Product Description"
						class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					/>
				</div>

				<div class="py-8"></div>

				<div class="flex justify-end my-6">
					<button
						class="bg-slate-50 px-8 py-2.5 mr-4 leading-5 border transition-colors duration-300 transform rounded-md focus:outline-none"
					>
						Cancel
					</button>
					<button
						class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:bg-lime-500"
					>
						Create Product
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
