<script setup>
import { onMounted, ref } from "vue";
import { useCategoryStore } from "@/stores/modules/category.store";
import BreadCrumb from "@/components/BreadCrumb.vue";
import ProductApis from "@/services/apis/ProductApis";
import { useProductStore } from "@/stores/modules/product.store";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import LoadingIndicator from "@/components/LoadingIndicator.vue";

const router = useRouter();

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

const api = ProductApis;
const categoryStore = useCategoryStore();
const productStore = useProductStore();

categoryStore.fetchCategories();

onMounted(async () => {
	await categoryStore.getCategories;
});

// variables
let loading = ref(true);
const image = ref(productStore.getProduct.product_image);
let product_image = ref(null);
const category_id = ref("");
const name = ref(productStore.getProduct.name);
const price = ref(productStore.getProduct.price);
const description = ref(productStore.getProduct.description);

// functions
const changeLoadingStatus = (val) => {
	loading.value = val;
};

const selectImage = (e) => {
	product_image.value = e.target.files[0];
};

const updateProduct = async () => {
	changeLoadingStatus(false);
	const data = {
		category_id: category_id.value,
		name: name.value,
		description: description.value,
		price: price.value,
		product_image: product_image.value,
		user_id: localStorage.getItem("userId"),
	};

	await api
		.updateProduct(data)
		.then((response) => {
			Toast.fire({
				icon: "success",
				title: response.data.message,
			});

			changeLoadingStatus(true);

			router.push({ path: "/my-store/product-list" });
		})
		.catch((error) => {});
};
</script>

<template>
	<div class="w-full">
		<BreadCrumb
			prev="Products"
			current="Add Product Compliance"
		></BreadCrumb>

		<!-- component -->
		<div class="bg-gray-100">
			<div
				class="header bg-white h-16 px-10 py-8 border-b-2 border-gray-200 flex items-center justify-between"
			>
				<div class="flex items-center space-x-2 text-gray-400">
					<span
						class="text-green-700 tracking-wider font-thin text-md"
						><a href="#">Home</a></span
					>
					<span>/</span>
					<span class="tracking-wide text-md">
						<span class="text-base">Categories</span>
					</span>
					<span>/</span>
				</div>
			</div>
			<div
				class="header my-3 h-12 px-10 flex items-center justify-between"
			>
				<h1 class="font-medium text-2xl">All Categories</h1>
			</div>
			<div class="flex flex-col mx-3 mt-6 lg:flex-row">
				<div class="w-full lg:w-1/3 m-1">
					<form class="w-full bg-white shadow-md p-6">
						<div class="flex flex-wrap -mx-3 mb-6">
							<div class="w-full md:w-full px-3 mb-6">
								<label
									class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
									htmlFor="category_name"
									>Category Name</label
								>
								<input
									class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
									type="text"
									name="name"
									placeholder="Category Name"
									required
								/>
							</div>
							<div class="w-full px-3 mb-6">
								<textarea
									textarea
									rows="4"
									class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
									type="text"
									name="description"
									required
								>
								</textarea>
							</div>

							<div class="w-full md:w-full px-3 mb-6">
								<button
									class="appearance-none block w-full bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500"
								>
									Add Category
								</button>
							</div>

							<div class="w-full px-3 mb-8">
								<label
									class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center"
									htmlFor="dropzone-file"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-10 w-10 text-green-800"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
										/>
									</svg>

									<h2
										class="mt-4 text-xl font-medium text-gray-700 tracking-wide"
									>
										Category image
									</h2>

									<p class="mt-2 text-gray-500 tracking-wide">
										Upload or drag & drop your file SVG,
										PNG, JPG or GIF.
									</p>

									<input
										id="dropzone-file"
										type="file"
										class="hidden"
										name="category_image"
										accept="image/png, image/jpeg, image/webp"
									/>
								</label>
							</div>
						</div>
					</form>
				</div>
				<div
					class="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200"
				>
					<div class="overflow-x-auto rounded-lg p-3">
						<table class="table-auto w-full">
							<thead
								class="text-sm font-semibold uppercase text-gray-800 bg-gray-50 mx-auto"
							>
								<tr>
									<th></th>
									<th>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="fill-current w-5 h-5 mx-auto"
										>
											<path
												d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5 1.597 1.363L13 13l4 6H7l2-3z"
											></path>
										</svg>
									</th>
									<th class="p-2">
										<div class="font-semibold">
											Category
										</div>
									</th>
									<th class="p-2">
										<div class="font-semibold text-left">
											Description
										</div>
									</th>
									<th class="p-2">
										<div class="font-semibold text-center">
											Action
										</div>
									</th>
								</tr>
								<tr>
									<td>1</td>
									<td>
										<img
											src="https://images.pexels.com/photos/25652584/pexels-photo-25652584/free-photo-of-elegant-man-wearing-navy-suit.jpeg?auto=compress&cs=tinysrgb&w=400"
											class="h-8 w-8 mx-auto"
										/>
									</td>
									<td>Sample Name</td>
									<td>Sample Description</td>
									<td class="p-2">
										<div class="flex justify-center">
											<a
												href="#"
												class="rounded-md hover:bg-green-100 text-green-600 p-2 flex justify-between items-center"
											>
												<span
													><FaEdit
														class="w-4 h-4 mr-1"
													/>
												</span>
												Edit
											</a>
											<button
												class="rounded-md hover:bg-red-100 text-red-600 p-2 flex justify-between items-center"
											>
												<span
													><FaTrash
														class="w-4 h-4 mr-1"
												/></span>
												Delete
											</button>
										</div>
									</td>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-white w-full border my-8 px-8 shadow-md rounded-lg">
			<p class="text-2xl font-semibold p-4">
				Add Product Compliance: {{ productStore.getProduct.sku }}
			</p>

			<p class="text-lg text-gray-500 p-4">File the form below</p>

			<form id="product" @submit.prevent="updateProduct()" class="w-full">
				<div class="flex flex-col w-full">
					<textarea
						rows="10"
						id="description"
						type="text"
						placeholder="Product Description"
						required
						class="block w-full px-4 py-2 capitalize text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-gray-300 focus:outline-none focus:ring"
					></textarea>
					<button
						type="button"
						class="py-4 my-8 font-semibold rounded-md text-gray-50 bg-lime-600"
					>
						Submit
					</button>
				</div>

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
						class="w-1/2 text-center px-8 py-8 rounded-md text-gray-600"
					/>

					<div class="border-b">
						<img class="" :src="image" alt="" />
					</div>
				</div>

				<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
					<div class="flex">
						<!-- <label
							for="categories"
							class="text-gray-600 pt-2 mt-2 pr-4 border"
							>Select Product Category</label
						> -->
						<select
							id="categories"
							name="categories"
							v-model="category_id"
							required
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring"
						>
							<option value="" selected>
								Select Product Category
							</option>
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
							required
							class="block w-full px-4 py-2 mt-2 capitalize text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring"
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
									required
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
						required
						class="block w-full px-4 py-2 capitalize text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-gray-300 focus:outline-none focus:ring"
					></textarea>
				</div>

				<div class="py-8"></div>

				<div class="flex justify-end my-6">
					<RouterLink
						to="/my-store/product-list"
						class="bg-slate-50 px-8 py-2.5 mr-4 leading-5 border transition-colors duration-300 transform rounded-md focus:outline-none"
					>
						Cancel
					</RouterLink>
					<button
						v-if="loading"
						class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:bg-lime-500"
					>
						Update Product
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
