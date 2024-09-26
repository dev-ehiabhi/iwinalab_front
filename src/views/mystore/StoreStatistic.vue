<script setup>
import { onMounted } from "vue";

// onMounted(() => {
// 	getUserProducts();
// });
</script>

<template>
	<div class="w-full">
		<h1 class="pb-8 text-3xl font-medium">My Store</h1>

		<section class="my-6 text-gray-800">
			<div
				class="w-full grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-4"
			>
				<div
					class="flex justify-between border p-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800"
				>
					<div class="flex flex-col justify-between">
						<p class="capitalize text-md whitespace-nowrap">
							Total Transactions
						</p>
						<p class="text-3xl leading-none font-medium">200</p>
					</div>
					<div
						class="flex justify-center p-2 align-middle rounded-lg sm:p-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-9 bg-orange-100 text-orange-400 rounded-md p-2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</div>
				</div>

				<div
					class="flex justify-between border p-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800"
				>
					<div class="flex flex-col justify-between">
						<p class="capitalize text-md whitespace-nowrap">
							Listed Products
						</p>
						<p class="text-3xl leading-none font-medium">7500</p>
					</div>

					<div
						class="flex justify-center p-2 align-middle rounded-lg sm:p-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							class="size-9 bg-orange-100 text-orange-400 rounded-md p-2"
						>
							<path
								d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
							></path>
							<path
								d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"
							></path>
							<polygon
								points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"
							></polygon>
							<polygon
								points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"
							></polygon>
						</svg>
					</div>
				</div>

				<div
					class="flex justify-between border p-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800"
				>
					<div class="flex flex-col justify-between">
						<p class="capitalize text-md whitespace-nowrap">
							Recent Orders
						</p>
						<p class="text-3xl leading-none font-medium">172%</p>
					</div>
					<div
						class="flex justify-center p-2 align-middle rounded-lg sm:p-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							class="size-9 bg-orange-100 text-orange-400 rounded-md p-2"
						>
							<path
								d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"
							></path>
							<rect width="16" height="16" x="80" y="264"></rect>
							<rect width="16" height="16" x="240" y="128"></rect>
							<rect width="16" height="16" x="136" y="168"></rect>
							<rect width="16" height="16" x="400" y="264"></rect>
							<path
								d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"
							></path>
						</svg>
					</div>
				</div>

				<div
					class="flex justify-between border p-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800"
				>
					<div class="flex flex-col justify-between">
						<p class="capitalize text-md whitespace-nowrap">
							Completed Orders
						</p>
						<p class="text-3xl leading-none font-medium">17%</p>
					</div>

					<div
						class="flex justify-center p-2 align-middle rounded-lg sm:p-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							class="size-9 bg-orange-100 text-orange-400 rounded-md p-2"
						>
							<path
								d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
