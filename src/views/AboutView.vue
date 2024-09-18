<script setup>
import CheckBadge from "@/components/icons/CheckBadge.vue";
import fumigate from "@/assets/images/about/fumigate.png";
import tractor from "@/assets/images/about/tractor.png";
import man_squat from "@/assets/images/about/man_squat.png";
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
				<h1 class="text-lg font-semibold text-white lg:text-4xl">
					About
					<span class="text-lime-400">Us</span>
				</h1>
				<p
					class="w-full px-5 py-2 mt-4 text-3xl font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto focus:outline-none"
				>
					Simplifying Food Exports, Elevating Standards
				</p>
			</div>
		</div>
	</div>

	<!-- Vision -->
	<section class="py-16 font-nunito">
		<div
			class="w-full mx-auto grid grid-cols-1 gap-6 lg:gap-10 md:px-10 md:pb-10 lg:grid-cols-2"
		>
			<div class="flex flex-col mx-4 lg:mx-0">
				<p class="py-1 text-lg text-gray-500 font-medium">Our Vision</p>

				<p class="pt-4 text-3xl text-gray-600">
					Empowering Global Food Exports
				</p>
			</div>
			<div class="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
				<div class="relative text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="absolute top-0 left-0 w-8 h-8 text-gray-300"
					>
						<path
							fill="currentColor"
							d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
						></path>
						<path
							fill="currentColor"
							d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
						></path>
					</svg>
					<p class="px-6 py-1 text-lg text-gray-700 italic">
						At Iwina, our vision propels us forward into a future
						where exporting consumable products is effortless and
						efficient. We are committed to ensuring compliance with
						all local regulations and requirements while pioneering
						innovative software solutions that revolutionize the
						food export industry. Our aspiration is to become the
						foremost digital food compliance export company,
						dedicated to empowering businesses to expand their
						global reach and deliver safe, high-quality food
						products to consumers worldwide.
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="absolute bottom-0 right-0 w-8 h-8 text-gray-300"
					>
						<path
							fill="currentColor"
							d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
						></path>
						<path
							fill="currentColor"
							d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
						></path>
					</svg>
				</div>
				<span class="w-12 h-1 my-2 rounded-lg bg-lime-600"></span>
			</div>
		</div>
	</section>

	<div>
		<img :src="fumigate" alt="" srcset="" />
	</div>

	<!-- Our values -->
	<section class="bg-blue-50 dark:bg-gray-900 font-nunito">
		<div class="container px-6 py-12 mx-auto">
			<div class="text-center">
				<h1
					class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white"
				>
					Our Values
				</h1>

				<p class="mt-3 text-gray-500 dark:text-gray-400">
					Exporting Excellence, Guided by Values
				</p>
			</div>

			<div
				class="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-4 sm:grid-cols-2 p-8 rounded-lg"
			>
				<div class="px-4 rounded-lg bg-white md:p-6">
					<CheckBadge></CheckBadge>

					<h2
						class="mt-4 text-base font-medium text-gray-800 dark:text-white"
					>
						Customer Approach
					</h2>
					<p class="text-sm pt-2 text-gray-500 dark:text-gray-400">
						We prioritize our clients' needs, ensuring they have the
						best experience with our software solutions.
					</p>
				</div>

				<div class="px-4 rounded-lg bg-white md:p-6 dark:bg-gray-800">
					<CheckBadge></CheckBadge>

					<h2
						class="mt-4 text-base font-medium text-gray-800 dark:text-white"
					>
						Innovation
					</h2>
					<p class="text-sm pt-2 text-gray-500 dark:text-gray-400">
						We're dedicated to constant innovation, developing
						cutting-edge technology to simplify the export process.
					</p>
				</div>

				<div class="px-4 rounded-lg bg-white md:p-6 dark:bg-gray-800">
					<CheckBadge></CheckBadge>

					<h2
						class="mt-4 text-base font-medium text-gray-800 dark:text-white"
					>
						Compliance
					</h2>
					<p class="text-sm pt-2 text-gray-500 dark:text-gray-400">
						We prioritize our clients' needs, ensuring they have the
						best experience with our software solutions.
					</p>
				</div>

				<div class="px-4 rounded-lg bg-white md:p-6 dark:bg-gray-800">
					<CheckBadge></CheckBadge>

					<h2
						class="mt-4 text-base font-medium text-gray-800 dark:text-white"
					>
						Transparency
					</h2>
					<p class="text-sm pt-2 text-gray-500 dark:text-gray-400">
						We believe in transparency and aim to provide real-time
						information throughout the supply chain
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Our mission -->
	<section class="bg-white text-gray-800 py-16">
		<div class="text-center pb-4">
			<h1
				class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white"
			>
				Our Mission
			</h1>

			<p class="mt-3 text-gray-500 dark:text-gray-400">
				Streamlining Exports, Growing Global Economies
			</p>
		</div>
		<div class="container flex flex-col-reverse mx-auto lg:flex-row">
			<div
				class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-white text-gray-500"
			>
				<div class="flex space-x-2 sm:space-x-4">
					<div class="space-y-2">
						<p
							class="text-xl text-gray-700 font-medium leading-snug"
						>
							Transforming the Export Industry
						</p>
						<p class="leading-loose pt-4">
							Iwina's mission is to revolutionize the food export
							industry by providing innovative software solutions
							that ensure compliance with international
							regulations. We strive to streamline the compliance
							process, enhance transparency in the supply chain,
							and contribute to the growth of Africa's global
							economy.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:w-1/2 xl:w-3/5 bg-gray-100">
				<div
					class="flex items-center justify-center p-4 md:p-8 lg:p-12"
				>
					<img
						:src="tractor"
						alt=""
						class="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
					/>
				</div>
			</div>
		</div>

		<div class="py-8"></div>

		<div class="container flex flex-col-reverse mx-auto lg:flex-row">
			<div class="lg:w-1/2 xl:w-3/5 bg-gray-100">
				<div
					class="flex items-center justify-center p-4 md:p-8 lg:p-12"
				>
					<img
						:src="man_squat"
						alt=""
						class="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
					/>
				</div>
			</div>

			<div
				class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-white text-gray-500"
			>
				<div class="flex space-x-2 sm:space-x-4">
					<div class="space-y-2">
						<p
							class="text-xl text-gray-700 font-medium leading-snug"
						>
							Enhancing ComplianceEnhancing Compliance
						</p>
						<p class="leading-loose pt-4">
							The heart of our mission is ensuring compliance with
							international regulations. We are passionate about
							helping businesses meet these standards
							effortlessly. With Iwina's software solutions, you
							can trust that your exports are in full compliance
							with all the necessary rules and regulations.The
							heart of our mission is ensuring compliance with
							international regulations. We are passionate about
							helping businesses meet these standards
							effortlessly. With Iwina's software solutions, you
							can trust that your exports are in full compliance
							with all the necessary rules and regulations.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
