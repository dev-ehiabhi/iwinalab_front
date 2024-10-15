<script setup>
import { useMarketplaceStore } from "@/stores/modules/marketplace.store";
import { useShoppingcartStore } from "@/stores/modules/shoppingcart.store";
import MarketplaceApis from "@/services/apis/MarketplaceApis";
import { onMounted, ref } from "vue";
import RatingStar from "@/components/icons/RatingStar.vue";

const marketplaceStore = useMarketplaceStore();
const shoppingcartStore = useShoppingcartStore();
const api = MarketplaceApis;

const toggler = ref(true);

const fetchProductDetails = async () => {
	await api
		.getProduct(marketplaceStore.getProduct.id)
		.then((response) => {
			marketplaceStore.setProduct(response.data.data);
		})
		.catch((error) => {
			console.error(error.response);
		});
};

onMounted(() => {
	fetchProductDetails();
});

const addToCart = (product) => {
	shoppingcartStore.addToCart(product);
};

const toggleTab = (val) => {
	toggler.value = val;
};
</script>

<template>
	<RouterLink to="/marketplace/shopping-cart">Cart</RouterLink>
	<section class="text-gray-600 body-font border rounded-md">
		<div class="px-5 py-8 mx-auto">
			<div class="mx-auto flex flex-wrap gap-4">
				<div class="md:w-[40%] h-auto w-full flex flex-col">
					<img
						:alt="marketplaceStore.getProduct.name"
						class="w-full md:h-96 object-cover object-center rounded"
						:src="marketplaceStore.getProduct.product_image"
					/>
					<div class="flex gap-x-4 h-16 w-16 mt-2">
						<img
							:alt="marketplaceStore.getProduct.name"
							class="w-full lg:h-auto h-16 object-cover object-center rounded"
							:src="marketplaceStore.getProduct.product_image"
						/>

						<img
							:alt="marketplaceStore.getProduct.name"
							class="w-full lg:h-auto h-16 object-cover object-center rounded"
							:src="marketplaceStore.getProduct.product_image"
						/>
					</div>
				</div>
				<div
					class="xl:w-[60%] lg:w-[57%] md:w-[55%] w-full mx-auto lg:px-4 px-2 border rounded-md md:py-4 lg:mt-0"
				>
					<h1
						class="text-gray-900 text-3xl capitalize font-medium mb-1"
					>
						{{ marketplaceStore.getProduct.name }}
					</h1>
					<h2
						class="text-gray-900 text-3xl py-4 capitalize font-medium"
					>
						${{ marketplaceStore.getProduct.price }}
					</h2>
					<div class="flex mb-4">
						<span class="flex items-center">
							<RatingStar></RatingStar>
							<RatingStar></RatingStar>
							<RatingStar></RatingStar>
							<RatingStar></RatingStar>
							<span class="text-gray-600 ml-3"
								>4.0 Star Rating</span
							><span class="text-gray-600 text-sm ml-3"
								>(4 Reviews)</span
							>
						</span>
						<!-- <span
							class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"
						>
							<a class="text-gray-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path
										d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
									></path>
								</svg>
							</a>
							<a class="text-gray-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path
										d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
									></path>
								</svg>
							</a>
							<a class="text-gray-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path
										d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
									></path>
								</svg>
							</a>
						</span> -->
					</div>
					<h2 class="py-2 font-medium">Features</h2>
					<p
						class="leading-relaxed"
						v-html="marketplaceStore.getProduct.features"
					></p>
					<div class="pb-4 pt-2 border-b"></div>
					<!-- <div
						class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
					>
						<div class="flex">
							<span class="mr-3">Color</span>
							<button
								class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
							></button>
							<button
								class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
							></button>
							<button
								class="border-2 border-gray-300 ml-1 bg-lime-500 rounded-full w-6 h-6 focus:outline-none"
							></button>
						</div>
						<div class="flex ml-6 items-center">
							<span class="mr-3">Size</span>
							<div class="relative">
								<select
									class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-lime-200 focus:border-lime-500 text-base pl-3 pr-10"
								>
									<option>SM</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</select>
								<span
									class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
								>
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4"
										viewBox="0 0 24 24"
									>
										<path d="M6 9l6 6 6-6"></path>
									</svg>
								</span>
							</div>
						</div>
					</div> -->
					<div class="flex py-2.5">
						<!-- <span
							class="title-font font-medium text-2xl text-gray-900"
							>N {{ marketplaceStore.getProduct.price }}</span
						> -->
						<button
							@click="addToCart(marketplaceStore.getProduct)"
							class="flex ml-auto text-white bg-lime-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-600 rounded"
						>
							Add to Cart
						</button>
						<!-- <button
							class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
								></path>
							</svg>
						</button> -->
					</div>
				</div>
			</div>
		</div>

		<div
			class="flex mx-8 pt-8 overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700"
		>
			<button
				@click="toggleTab(true)"
				class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
			>
				Description
			</button>

			<button
				@click="toggleTab(false)"
				class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
			>
				Review
			</button>
		</div>

		<p v-if="toggler" class="p-8">
			{{ marketplaceStore.getProduct.description }}
		</p>
		<p v-else class="p-8">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
			obcaecati officia ipsa eos sequi quo quibusdam neque fugiat, sed
			eius? Commodi eligendi labore excepturi eos nemo ea architecto.
			Quas, veniam.
		</p>
	</section>
</template>
