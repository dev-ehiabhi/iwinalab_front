<script setup>
import BreadCrumb from "@/components/BreadCrumb.vue";
import { onMounted, ref } from "vue";
import { useProductStore } from "@/stores/modules/product.store";

const productStore = useProductStore();

productStore.fetchProducts();

onMounted(async () => {
	await productStore.getProducts;
});
</script>

<template>
	<div class="w-full">
		<BreadCrumb prev="Marketplace" current="Product Listing" />

		<header class="p-4 text-gray-800">
			<div class="container flex justify-between h-16 mx-auto">
				<!-- <ul class="items-stretch hidden space-x-3 lg:flex">
					<li class="flex">
						<a
							rel="noopener noreferrer"
							href="#"
							class="flex items-center px-4 -mb-1 border-b-2 border-transparent text-lime-600 border-lime-600"
							>Link</a
						>
					</li>
				</ul> -->
				<span
					rel="noopener noreferrer"
					href="#"
					aria-label="Back to homepage"
					class="flex items-center p-2"
				>
					Product List
				</span>
				<div class="flex items-center md:space-x-4">
					<div class="relative">
						<span
							class="absolute inset-y-0 left-0 flex items-center pl-2"
						>
							<button
								type="submit"
								title="Search"
								class="p-1 focus:outline-none focus:ring"
							>
								<svg
									fill="currentColor"
									viewBox="0 0 512 512"
									class="w-4 h-4 text-gray-800"
								>
									<path
										d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
									></path>
								</svg>
							</button>
						</span>
						<input
							type="search"
							name="Search"
							placeholder="Search..."
							class="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto border focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
						/>
					</div>
					<RouterLink
						to="/products/create-product"
						type="button"
						class="px-6 py-2 font-semibold rounded bg-lime-600 text-gray-50"
					>
						Add
						<span class="hidden lg:inline-flex">New</span> Product
					</RouterLink>
				</div>
			</div>
		</header>

		<section
			class="text-gray-600 body-font bg-white h-full w-full border my-8 rounded-lg"
		>
			<p class="text-2xl font-semibold p-4">Products</p>
			<div class="px-5 mx-auto">
				<div class="flex flex-wrap -m-4">
					<div
						v-for="(product, index) in productStore.getProducts"
						:key="index"
						class="lg:w-1/4 md:w-1/2 p-4 w-full"
					>
						<RouterLink
							to="{{product.id}}"
							class="block relative h-48 rounded overflow-hidden"
						>
							<img
								alt="product"
								class="object-cover object-center w-full h-full block"
								:src="product.product_image"
							/>
						</RouterLink>
						<div class="mt-4">
							<h3
								class="text-gray-500 text-md tracking-widest title-font mb-1"
							>
								{{ product.name }}
							</h3>
							<h2
								class="text-gray-600 title-font text-sm line-clamp-3"
							>
								{{ product.description }}
							</h2>
							<p class="mt-1">N {{ product.price }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
