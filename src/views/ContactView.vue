<script setup>
import laptop from "@/assets/images/about/laptop.png";
</script>

<template>
	<!-- Header -->
	<div
		class="w-full bg-center bg-cover h-[18rem] bg-[url('/src/assets/images/landing/hero_section.jpg')]"
	>
		<div
			class="flex items-center justify-center w-full h-full bg-gray-900/40"
		>
			<div class="text-center">
				<h1 class="text-lg font-semibold text-white lg:text-2xl">
					Contact
					<span class="text-lime-400">Us</span>
				</h1>
				<p
					class="w-full px-5 py-2 mt-4 text-3xl font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto focus:outline-none"
				>
					Let's Connect and Create Opportunities
				</p>
			</div>
		</div>
	</div>

	<section class="bg-white text-gray-800 py-16">
		<div class="flex flex-col-reverse mx-auto lg:flex-row">
			<div
				class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-white text-gray-500"
			>
				<div class="flex space-x-2 sm:space-x-4">
					<div class="px-4 rounded-lg dark:bg-gray-800 md:px-8">
						<p class="text-2xl font-medium text-gray-700">
							Get in touch
						</p>
						<p class="pt-2 mb-8">We are here to help you!</p>
						<form class="">
							<div class="-mx-2 md:items-center md:flex">
								<div class="flex-1 px-2">
									<label
										class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
										>First Name</label
									>
									<input
										type="text"
										placeholder="John "
										class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>

								<div class="flex-1 px-2 mt-4 md:mt-0">
									<label
										class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
										>Last Name</label
									>
									<input
										type="text"
										placeholder="Doe"
										class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>
							</div>

							<div class="mt-4">
								<label
									class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
									>Email address</label
								>
								<input
									type="email"
									placeholder="johndoe@example.com"
									class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>

							<div class="w-full mt-4">
								<label
									class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
									>Message</label
								>
								<textarea
									class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
									placeholder="Message"
								></textarea>
							</div>

							<button
								class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-500 rounded-lg hover:bg-lime-400 focus:outline-none focus:ring focus:ring-lime-300 focus:ring-opacity-50"
							>
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>
			<div class="lg:w-1/2 xl:w-3/5 bg-gray-100">
				<div class="flex items-center justify-center">
					<img
						:src="laptop"
						alt=""
						class="rounded-lg w-full bg-gray-500 sm:min-h-96"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
