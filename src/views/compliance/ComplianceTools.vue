<script setup>
import BreadCrumb from "@/components/BreadCrumb.vue";
</script>

<template>
	<div class="w-full">
		<BreadCrumb prev="Compliance Tools" current=""></BreadCrumb>

		<section class="px-4 mx-auto border py-8 rounded-lg">
			<h1 class="pb-8 text-3xl font-medium">Compliance Tools</h1>

			<div class="text-gray-600 body-font">
				<div class="container px-5 mx-auto">
					<div class="flex flex-wrap -m-4">
						<div class="p-4 lg:w-1/3">
							<div
								class="border bg-opacity-75 px-4 py-8 rounded-lg overflow-hidden text-center relative"
							>
								<RouterLink to="audit/request">
									<div
										class="w-full flex justify-center pb-4"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1"
											stroke="currentColor"
											class="size-12 rounded-full bg-slate-100 p-2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
											/>
										</svg>
									</div>
									<h1
										class="title-font sm:text-xl text-lg font-medium text-gray-600 mb-3"
									>
										Audits & Assessments
									</h1>
									<p class="leading-normal text-sm mb-3">
										A comprehensive tool for conducting
										audits and assessments on eccommerce
										websites, focusing on
									</p>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
