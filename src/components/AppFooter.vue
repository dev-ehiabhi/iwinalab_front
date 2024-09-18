<script setup>
import { ref } from "vue";
import logo from "@/assets/images/general/iwina_logo.png";
const footer = ref(false);
</script>

<template>
	<footer class="bg-white dark:bg-gray-900">
		<div class="container px-6 py-8 mx-auto">
			<div class="flex flex-col items-center text-center">
				<a href="#">
					<img class="w-auto h-10" :src="logo" alt="Iwina Lab Logo" />
				</a>

				<div class="flex flex-wrap justify-center mt-6 -mx-4">
					<RouterLink
						to="/"
						class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
						aria-label="Reddit"
					>
						Home
					</RouterLink>

					<a
						href="#"
						class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
						aria-label="Reddit"
					>
						Solutions
					</a>

					<RouterLink
						to="about-us"
						class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
						aria-label="Reddit"
					>
						About us
					</RouterLink>

					<a
						href="#"
						class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
						aria-label="Reddit"
					>
						Blog
					</a>

					<RouterLink
						to="contact-us"
						class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
						aria-label="Reddit"
					>
						Contact us
					</RouterLink>
				</div>
			</div>

			<hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

			<div
				class="flex flex-col items-center sm:flex-row sm:justify-between"
			>
				<p class="text-sm text-gray-500 dark:text-gray-300">
					© Copyright 2024. All Rights Reserved.
				</p>

				<div class="flex mt-3 -mx-2 sm:mt-0">
					<a
						href="#"
						class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
						aria-label="Reddit"
					>
						Teams
					</a>

					<a
						href="#"
						class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
						aria-label="Reddit"
					>
						Privacy
					</a>

					<a
						href="#"
						class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
						aria-label="Reddit"
					>
						Cookies
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>
