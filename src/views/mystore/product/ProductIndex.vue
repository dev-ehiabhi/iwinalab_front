<script setup>
import { onMounted, ref } from "vue";
import { useProductStore } from "@/stores/modules/product.store";
import ProductApis from "@/services/apis/ProductApis";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { useRouter } from "vue-router";
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

const api = ProductApis;
const router = useRouter();
const productStore = useProductStore();

// variables
const deleteModal = ref(false);

const changeDeleteModalStatus = (val) => {
	deleteModal.value = val;
};

const getUserProducts = async () => {
	await api
		.getUserProducts(localStorage.getItem("userId"))
		.then((response) => {
			productStore.setProducts(response.data.data);
		})
		.catch((error) => {});
};

const addProductDetails = (product) => {
	productStore.setProduct(product);
	router.push("/my-store/products/add-product-details/" + product.sku);
};

const editProduct = (product) => {
	productStore.setProduct(product);
	router.push("/my-store/products/edit-product/" + product.sku);
};

const deleteProductModal = (product) => {
	productStore.setProduct(product);
	changeDeleteModalStatus(true);
};

const deleteProduct = () => {
	api.deleteOwnProduct(productStore.getProduct)
		.then((response) => {
			changeDeleteModalStatus(false);
			getUserProducts();
			Toast.fire({
				icon: "success",
				title: response.data.message,
			});
		})
		.catch((error) => {});
};

onMounted(() => {
	getUserProducts();
});
</script>

<template>
	<div class="w-full">
		<BreadCrumb prev="Store" current="Products"></BreadCrumb>
		<h1 class="pb-8 text-3xl font-medium">My Store</h1>

		<section class="px-4 mx-auto border py-8 rounded-lg">
			<div class="flex justify-between items-center gap-x-3">
				<h2 class="text-lg font-medium text-gray-800 dark:text-white">
					Products: {{ productStore.getProducts.length }}
				</h2>

				<RouterLink
					to="/my-store/products/add-product"
					class="px-4 py-2 text-lg text-gray-600 bg-lime-400 rounded-md dark:bg-gray-800 dark:text-lime-400"
				>
					Add Product
				</RouterLink>
			</div>

			<div class="flex flex-col mt-6">
				<div class="-my-2 overflow-x-auto">
					<div class="inline-block min-w-full py-2 align-middle">
						<div
							class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
						>
							<table
								class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
							>
								<thead class="bg-gray-50 dark:bg-gray-800">
									<tr>
										<th
											scope="col"
											class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
										>
											<div
												class="flex items-center gap-x-3"
											>
												<input
													type="checkbox"
													class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
												/>
												<span>Product</span>
											</div>
										</th>

										<th
											scope="col"
											class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
										>
											<button
												class="flex items-center gap-x-2"
											>
												<span>Price</span>
											</button>
										</th>

										<th
											scope="col"
											class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
										>
											<button
												class="flex items-center gap-x-2"
											>
												<span>Rating</span>
											</button>
										</th>

										<th
											scope="col"
											class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Status
										</th>

										<th
											scope="col"
											class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Organisation
										</th>

										<th
											scope="col"
											class="relative py-3.5 px-4 text-sm font-normal text-gray-500 dark:text-gray-400"
										>
											<span class="">Action</span>
										</th>
									</tr>
								</thead>

								<tbody
									class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
								>
									<tr
										v-for="(
											product, index
										) in productStore.getProducts"
										:key="product.id"
									>
										<td
											class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
										>
											<div
												class="inline-flex items-center gap-x-3"
											>
												<input
													type="checkbox"
													class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
												/>

												<div
													class="flex items-center gap-x-2"
												>
													<img
														class="object-cover w-10 h-10 rounded-md"
														:src="
															product.product_image
														"
														alt=""
													/>
													<div>
														<h2
															class="font-medium capitalize text-gray-800 dark:text-white"
														>
															{{ product.name }}
														</h2>
													</div>
												</div>
											</div>
										</td>
										<td
											class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
										>
											<div
												class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800"
											>
												<h2 class="text-sm font-normal">
													{{ product.price }}
												</h2>
											</div>
										</td>
										<td
											class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
										>
											**
										</td>
										<td
											v-if="product.status"
											class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
										>
											<p
												class="px-3 py-1 text-xs text-lime-500 rounded-md dark:bg-gray-800 bg-lime-100/60"
											>
												Cleared
											</p>
										</td>
										<td
											v-else
											class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
										>
											<p
												class="px-3 py-1 text-xs text-orange-500 rounded-md dark:bg-gray-800 bg-orange-100/60"
											>
												Not Cleared
											</p>
										</td>
										<td
											class="px-4 py-4 text-sm whitespace-nowrap"
										>
											<div
												class="flex items-center gap-x-2"
											>
												<p
													class="px-3 py-1 text-xs text-lime-500 rounded-md dark:bg-gray-800 bg-lime-100/60"
												>
													Completed
												</p>
											</div>
										</td>
										<td
											class="pl-4 py-4 text-sm whitespace-nowrap"
										>
											<div
												class="flex items-center gap-x-1"
											>
												<button
													@click="
														addProductDetails(
															product
														)
													"
													class="text-lime-600 transition-colors duration-200 dark:hover:text-lime-500 dark:text-lime-300 hover:text-lime-500 focus:outline-none"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														class="size-5"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M12 4.5v15m7.5-7.5h-15"
														/>
													</svg>
												</button>

												<button
													@click="
														editProduct(product)
													"
													class="text-yellow-600 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-yellow-300 hover:text-yellow-500 focus:outline-none"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														class="w-5 h-5"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
														/>
													</svg>
												</button>

												<button
													@click="
														deleteProductModal(
															product
														)
													"
													class="text-red-600 transition-colors duration-200 dark:hover:text-red-500 dark:text-red-300 hover:text-red-500 focus:outline-none"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														class="w-5 h-5"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
														/>
													</svg>
												</button>
												<div
													v-show="deleteModal"
													class="fixed inset-0 z-10 overflow-y-auto"
													aria-labelledby="modal-title"
													role="dialog"
													aria-modal="true"
												>
													<div
														class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
													>
														<span
															class="hidden sm:inline-block sm:align-middle sm:h-screen"
															aria-hidden="true"
															>&#8203;</span
														>

														<div
															class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
														>
															<div>
																<div
																	class="flex items-center justify-center"
																>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		class="w-8 h-8 text-red-600 dark:text-red-300"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																		stroke-width="2"
																	>
																		<path
																			stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
																		/>
																	</svg>
																</div>

																<div
																	class="mt-2 text-center"
																>
																	<h3
																		class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
																		id="modal-title"
																	>
																		Delete
																		Product
																	</h3>
																	<p
																		class="mt-2 text-sm text-gray-500 dark:text-gray-400"
																	>
																		Are you
																		sure you
																		want to
																		delete
																		<br /><span
																			class="text-lg uppercase text-wrap"
																			>{{
																				productStore
																					.getProduct
																					.name
																			}}
																			:</span
																		><span
																			class="text-lg"
																		>
																			{{
																				productStore
																					.getProduct
																					.sku
																			}}?
																		</span>
																	</p>
																</div>
															</div>

															<div
																class="mt-5 sm:flex sm:items-end sm:justify-between"
															>
																<div
																	class="h-2"
																></div>
																<div
																	class="sm:flex sm:items-end"
																>
																	<button
																		@click="
																			changeDeleteModalStatus(
																				false
																			)
																		"
																		class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
																	>
																		Cancel
																	</button>

																	<button
																		@click="
																			deleteProduct()
																		"
																		class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:w-auto sm:mt-0 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40"
																	>
																		Delete
																	</button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<!-- <div class="flex items-center justify-between mt-6">
				<a
					href="#"
					class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5 rtl:-scale-x-100"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
						/>
					</svg>

					<span> previous </span>
				</a>

				<div class="items-center hidden lg:flex gap-x-3">
					<a
						href="#"
						class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
						>1</a
					>
					<a
						href="#"
						class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
						>2</a
					>
					<a
						href="#"
						class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
						>3</a
					>
					<a
						href="#"
						class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
						>...</a
					>
					<a
						href="#"
						class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
						>12</a
					>
					<a
						href="#"
						class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
						>13</a
					>
					<a
						href="#"
						class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
						>14</a
					>
				</div>

				<a
					href="#"
					class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
				>
					<span> Next </span>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5 rtl:-scale-x-100"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div> -->
		</section>
	</div>
</template>
