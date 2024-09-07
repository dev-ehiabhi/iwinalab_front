<script setup lang="ts"></script>

<template>
	<div class="w-full">
		<h1 class="pb-8 text-3xl font-medium">Marketplace</h1>

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

		<section class="px-4 mx-auto border py-8 rounded-lg">
			<div class="flex justify-between items-center gap-x-3">
				<h2 class="text-lg font-medium text-gray-800 dark:text-white">
					Products
				</h2>

				<RouterLink
					to="/products/products-list"
					class="px-3 py-2 text-lg text-gray-600 bg-lime-300 rounded-md dark:bg-gray-800 dark:text-lime-400"
				>
					Views all products
				</RouterLink>
			</div>

			<div class="flex flex-col mt-6">
				<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div
						class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
					>
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
									<tr>
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
														src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
														alt=""
													/>
													<div>
														<h2
															class="font-medium text-gray-800 dark:text-white"
														>
															Arthur Melo
														</h2>
														<!-- <p
															class="text-sm font-normal text-gray-600 dark:text-gray-400"
														>
															@authurmelo
														</p> -->
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
												<!-- <span
													class="h-1.5 w-1.5 rounded-full bg-emerald-500"
												></span> -->

												<h2 class="text-sm font-normal">
													503500
												</h2>
											</div>
										</td>
										<td
											class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
										>
											Design Director
										</td>
										<td
											class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
										>
											authurmelo@example.com
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
											class="px-4 py-4 text-sm whitespace-nowrap"
										>
											<div
												class="flex items-center gap-x-6"
											>
												<button
													class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
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

												<button
													class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
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
											</div>
										</td>
									</tr>

									<!-- 
									<tr>
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
														class="object-cover w-10 h-10 rounded-full"
														src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
														alt=""
													/>
													<div>
														<h2
															class="font-medium text-gray-800 dark:text-white"
														>
															Mia
														</h2>
														<p
															class="text-sm font-normal text-gray-600 dark:text-gray-400"
														>
															@mia
														</p>
													</div>
												</div>
											</div>
										</td>
										<td
											class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
										>
											<div
												class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
											>
												<span
													class="h-1.5 w-1.5 rounded-full bg-emerald-500"
												></span>

												<h2
													class="text-sm font-normal text-emerald-500"
												>
													Active
												</h2>
											</div>
										</td>
										<td
											class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
										>
											Graphic Designer
										</td>
										<td
											class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
										>
											mia@example.com
										</td>
										<td
											class="px-4 py-4 text-sm whitespace-nowrap"
										>
											<div
												class="flex items-center gap-x-2"
											>
												<p
													class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60"
												>
													Design
												</p>
												<p
													class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60"
												>
													Product
												</p>
												<p
													class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60"
												>
													Marketing
												</p>
											</div>
										</td>
										<td
											class="px-4 py-4 text-sm whitespace-nowrap"
										>
											<div
												class="flex items-center gap-x-6"
											>
												<button
													class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
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

												<button
													class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
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
											</div>
										</td>
									</tr> -->
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
