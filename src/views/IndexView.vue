<script setup>
import section_1_image from "@/assets/images/landing/challenges.png";
import section_2_image from "@/assets/images/landing/harvest.png";
import section_3_image from "@/assets/images/landing/guy.png";
</script>

<template>
	<div
		class="w-full h-screen bg-blend-color-burn bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/landing/hero_section.jpg')]"
	>
		<header class="bg-gray-400 bg-transparent bg-blend-overlay font-nunito">
			<!-- <img src="" alt="">  -->
			<div class="relative isolate px-6 pt-4 lg:px-8">
				<div class="mx-auto max-w-7xl py-6 sm:py-8 lg:py-12">
					<div class="text-left">
						<h1
							class="text-2xl font-bold tracking-normal leading-8 text-white/100 capitalize sm:text-5xl"
						>
							Your gateway to <br />international regulatory
							<br />excellence!
						</h1>
						<p class="mt-6 text-lg leading-8 text-white">
							Empowering Farmers and SMEs for global exports.
						</p>
						<div
							class="mt-10 flex items-center justify-start gap-x-6"
						>
							<a
								href="#"
								class="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
								>Explore our Solutions</a
							>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>

	<section class="text-gray-800 font-nunito">
		<div
			class="container max-w-xl px-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl"
		>
			<div>
				<h2
					class="text-2xl font-medium tracking-tight text-center sm:text-4xl text-gray-700"
				>
					The Problem
				</h2>
				<p
					class="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600"
				>
					African farmers and SMEs face obstacles in meeting vital
					global compliance standards, demanding prompt action.
				</p>
			</div>

			<div>
				<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-stretch">
					<div class="lg:col-start-1 text-center">
						<div
							class="grid lg:items-center lg:justify-center pt-10 bg-stone-200"
						>
							<img class="" :src="section_1_image" alt="" />
						</div>
					</div>

					<div class="lg:col-start-2">
						<h3
							class="text-2xl tracking-tight sm:text-3xl text-gray-900"
						>
							Challenges
						</h3>
						<div class="mt-8 space-y-8">
							<div class="flex">
								<div class="flex-shrink-0">
									<div
										class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h4
										class="text-lg font-medium text-gray-900"
									>
										Regulatory Compliance
									</h4>
									<p class="mt-2 text-gray-600">
										Regulations are vital in agro-industry.
										Compliance software simplifies the
										process, reducing costs and risks while
										expanding global market access.
									</p>
								</div>
							</div>
							<div class="flex">
								<div class="flex-shrink-0">
									<div
										class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h4
										class="text-lg font-medium text-gray-900"
									>
										Supply Chain Transparency
									</h4>
									<p class="mt-2 text-gray-600">
										The agro-industry supply chain is
										complex, obscuring transparency.
										Software solutions provide end-to-end
										visibility, ensuring product quality and
										trust with consumers.
									</p>
								</div>
							</div>
							<div class="flex">
								<div class="flex-shrink-0">
									<div
										class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h4
										class="text-lg font-medium text-gray-900"
									>
										Product Traceability
									</h4>
									<p class="mt-2 text-gray-600">
										Traditional tracing is slow,
										error-prone, and risky. Traceability
										software with RFID and blockchain
										ensures fast, accurate product tracking,
										enhancing food safety and consumer
										protection.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
						<img
							src="https://source.unsplash.com/random/361x481"
							alt=""
							class="mx-auto rounded-lg shadow-lg bg-gray-500"
						/>
					</div>
				</div>
			</div>

			<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div>
					<div class="mt-12 space-y-12">
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="size-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
										/>
									</svg>
								</div>
							</div>
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Lack of Compliance Assurance
								</h4>
								<p class="mt-2 text-gray-600">
									Agro-industry exporters often struggle to
									meet international standards, risking
									rejected shipments, losses, and a damaged
									reputation. Compliance software proactively
									monitors and assesses compliance, offering
									real-time alerts and suggestions to prevent
									costly issues.
								</p>
							</div>
						</div>
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="size-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
										/>
									</svg>
								</div>
							</div>
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Limited Market AccessLimited Market Access
								</h4>
								<p class="mt-2 text-gray-600">
									Small-scale producers often lack access to
									global markets. Market access platforms
									offer tools and information to connect them
									with buyers and expand their reach,
									improving livelihoods.
								</p>
							</div>
						</div>
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="size-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
										/>
									</svg>
								</div>
							</div>
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Lack of Financial Planning
								</h4>
								<p class="mt-2 text-gray-600">
									Subsistence exporters and producers often
									face financial challenges. Financial
									management software helps them plan budgets,
									organize finances, and make informed
									investments to unlock growth opportunities
									and reap the rewards of their efforts
								</p>
							</div>
						</div>
					</div>
				</div>
				<div aria-hidden="true" class="mt-10 lg:mt-0">
					<!-- <img
						:src="section_1_image"
						alt=""
						class="border-4 mx-auto rounded-lg bg-red-500"
					/> -->
					<img
						:src="section_2_image"
						class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
						alt="Sack, seed, scale"
					/>
				</div>
			</div>

			<!-- consequences -->
			<div>
				<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-stretch">
					<img class="lg:col-start-1" :src="section_3_image" alt="" />

					<div class="lg:col-start-2">
						<h3
							class="text-2xl tracking-tight sm:text-3xl text-gray-900"
						>
							Consequences
						</h3>
						<div class="mt-12 space-y-12">
							<div class="flex">
								<div class="flex-shrink-0">
									<div
										class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h4
										class="text-lg font-medium leading-6 text-gray-900"
									>
										Revenue LossRevenue Loss
									</h4>
									<p class="mt-2 text-gray-600">
										Failure to meet compliance standards can
										result in revenue loss, impacting these
										businesses' growth and investment
										capabilities.
									</p>
								</div>
							</div>
							<div class="flex">
								<div class="flex-shrink-0">
									<div
										class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h4
										class="text-lg font-medium leading-6 text-gray-900"
									>
										Reduced Market Access
									</h4>
									<p class="mt-2 text-gray-600">
										Non-compliance limits global market
										access, hampering expansion and income
										diversification for African products.
									</p>
								</div>
							</div>
							<div class="flex">
								<div class="flex-shrink-0">
									<div
										class="flex items-center justify-center w-12 h-12 rounded-md bg-orange-600 text-gray-50"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4">
									<h4
										class="text-lg font-medium leading-6 text-gray-900"
									>
										Inhibited Growth
									</h4>
									<p class="mt-2 text-gray-600">
										Inability to meet compliance hinders the
										growth of African agriculture and SME
										sectors, limiting their potential.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
						<img
							src="https://source.unsplash.com/random/361x481"
							alt=""
							class="mx-auto rounded-lg shadow-lg bg-gray-500"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- <div class="py-12 text-center">
		<h1 class="text-4xl capitalize">The problem</h1>
		<p class="py-4 text-lg">
			African farmers and SMEs face obstacles in meeting vital global
			compliance standards, demanding prompt action.
		</p>
	</div> -->

	<!-- <article
		class="group grid rounded-md max-w-5xl mx-auto grid-cols-1 md:grid-cols-8 overflow-hidden bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
	>
		
		<div class="col-span-3 overflow-hidden">
			<img
				:src="section_1_image"
				class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
				alt="Sack, seed, scale"
			/>
		</div>
		
		<div class="flex flex-col justify-center p-6 col-span-5">
			<h1 class="mb-4 text-4xl font-medium">Challenges</h1>
			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Regulatory Compliance
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				Regulations are vital in agro-industry. Compliance software
				simplifies the process, reducing costs and risks while expanding
				global market access.
			</p>

			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Supply Chain Transparency
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				The agro-industry supply chain is complex, obscuring
				transparency. Software solutions provide end-to-end visibility,
				ensuring product quality and trust with consumers.
			</p>

			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Product Traceability
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				Traditional tracing is slow, error-prone, and risky.
				Traceability software with RFID and blockchain ensures fast,
				accurate product tracking, enhancing food safety and consumer
				protection.
			</p>
		</div>
	</article> -->

	<!-- <div class="my-8"></div> -->

	<!-- <article
		class="group grid rounded-md max-w-5xl mx-auto grid-cols-1 md:grid-cols-8 overflow-hidden bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
	>
		
		<div class="flex flex-col justify-center p-6 col-span-5">
			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Lack of Compliance Assurance
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				Agro-industry exporters often struggle to meet international
				standards, risking rejected shipments, losses, and a damaged
				reputation. Compliance software proactively monitors and
				assesses compliance, offering real-time alerts and suggestions
				to prevent costly issues.
			</p>

			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Limited Market Access
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				Small-scale producers often lack access to global markets.
				Market access platforms offer tools and information to connect
				them with buyers and expand their reach, improving livelihoods.
			</p>

			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Lack of Financial Planning
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				Subsistence exporters and producers often face financial
				challenges. Financial management software helps them plan
				budgets, organize finances, and make informed investments to
				unlock growth opportunities and reap the rewards of their
				efforts.
			</p>
		</div>

		
		<div class="col-span-3 overflow-hidden">
			<img
				:src="section_2_image"
				class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
				alt="Sack, seed, scale"
			/>
		</div>
	</article> -->

	<!-- <article
		class="group grid rounded-md max-w-5xl mx-auto grid-cols-1 md:grid-cols-8 overflow-hidden bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
	>
		
		<div class="col-span-3 overflow-hidden">
			<img
				:src="section_3_image"
				class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
				alt="Sack, seed, scale"
			/>
		</div>
		
		<div class="flex flex-col justify-center p-6 col-span-5">
			<h1 class="mb-4 text-4xl font-medium">Consequences</h1>
			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Revenue Loss
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				Failure to meet compliance standards can result in revenue loss,
				impacting these businesses' growth and investment capabilities.
			</p>

			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Reduced Market Access
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				Non-compliance limits global market access, hampering expansion
				and income diversification for African products.
			</p>

			<h3
				class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white"
				aria-describedby="articleDescription"
			>
				Inhibited Growth
			</h3>
			<p
				id="articleDescription"
				class="my-4 max-w-lg text-pretty text-sm"
			>
				Inability to meet compliance hinders the growth of African
				agriculture and SME sectors, limiting their potential.
			</p>
		</div>
	</article> -->

	<div class="my-12"></div>

	<div class="bg-lime-50 text-gray-800 font-nunito">
		<div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-3xl font-medium sm:text-4xl">Our Solution</h2>
				<p class="mt-4 text-lg text-gray-600">
					African farmers and SMEs face obstacles in meeting vital
					global compliance standards, demanding prompt action.
				</p>
			</div>
			<dl
				class="mt-12 pt-4 space-y-10 sm:space-y-0 border-t border-lime-200 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
			>
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						class="flex-shrink-0 w-6 h-6 text-teal-600"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Assessment Tools</dt>
						<dd class="mt-2 text-gray-600">
							Our tools streamline compliance assessment, offering
							actionable insights for product enhancement to
							farmers, producers and exporters.
						</dd>
						<a
							href=""
							class="inline-flex items-center space-x-2 text-sm"
						>
							<span>View Details</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-4 h-4"
							>
								<path
									fill-rule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						class="flex-shrink-0 w-6 h-6 text-teal-600"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Marketplace</dt>
						<dd class="mt-2 text-gray-600">
							Our marketplace links compliant African producers
							with international buyers, streamlining supply
							chains and boosting business growth.
						</dd>
						<a
							href=""
							class="inline-flex items-center space-x-2 text-sm"
						>
							<span>View Details</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-4 h-4"
							>
								<path
									fill-rule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						class="flex-shrink-0 w-6 h-6 text-teal-600"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Regulatory Support</dt>
						<dd class="mt-2 text-gray-600">
							iWina Lab supports regulatory bodies with robust
							software for monitoring and enforcing compliance,
							improving industry standards.
						</dd>
						<a
							href=""
							class="inline-flex items-center space-x-2 text-sm"
						>
							<span>View Details</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-4 h-4"
							>
								<path
									fill-rule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						class="flex-shrink-0 w-6 h-6 text-teal-600"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						></path>
					</svg>
					<div class="ml-3">
						<dt class="text-lg font-medium">Training Modules</dt>
						<dd class="mt-2 text-gray-600">
							We offer specialized training modules that equip our
							users with the knowledge and skills required to meet
							compliance standards effectively.
						</dd>
						<a
							href=""
							class="inline-flex items-center space-x-2 text-sm"
						>
							<span>View Details</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-4 h-4"
							>
								<path
									fill-rule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</dl>
		</div>
	</div>

	<!-- <section class="bg-lime-50">
		<article class="">
			<div
				class="container mx-auto max-w-xl px-6 py-12 space-y-8 lg:px-8 lg:max-w-7xl"
			>
				<h1
					class="text-2xl font-medium tracking-tight text-center sm:text-4xl text-gray-700 capitalize"
				>
					Our Solution
				</h1>
				<p class="max-w-3xl mx-auto text-xl text-center text-gray-600">
					African farmers and SMEs face obstacles in meeting vital
					global compliance standards, demanding prompt action.
				</p>
			</div>

			<div
				class="containner md:flex justify-around gap-4 border-t border-lime-200 pt-4"
			>
				<div class="lg:flex-1">
					<h1 class="text-2xl font-semibold text-gray-600">
						Assessment Tools
					</h1>
					<p class="py-4">
						Our tools streamline compliance assessment, offering
						actionable insights for product enhancement to farmers,
						producers and exporters.
					</p>
					<a href="" class="text-sm">View Details</a>
				</div>
				<div class="lg:flex-1">
					<h1 class="text-2xl font-semibold text-gray-600">
						Marketplace
					</h1>
					<p class="py-4">
						Our marketplace links compliant African producers with
						international buyers, streamlining supply chains and
						boosting business growth.
					</p>
					<a href="" class="text-sm">View Details</a>
				</div>
				<div class="lg:flex-1">
					<h1 class="text-2xl font-semibold text-gray-600">
						Regulatory Support
					</h1>
					<p class="py-4">
						iWina Lab supports regulatory bodies with robust
						software for monitoring and enforcing compliance,
						improving industry standards.
					</p>
					<a href="" class="text-sm">View Details</a>
				</div>
				<div class="lg:flex-1">
					<h1 class="text-2xl font-semibold text-gray-600">
						Training Modules
					</h1>
					<p class="py-4">
						We offer specialized training modules that equip our
						users with the knowledge and skills required to meet
						compliance standards effectively.
					</p>
					<a href="" class="text-sm">View Details</a>
				</div>
			</div>

			<img src="" alt="" class="w-[95%] mx-auto pt-8" />
		</article>
	</section> -->

	<section class="bg-blue-50 font-nunito">
		<article class="p-16">
			<div class="text-center">
				<h1 class="text-4xl capitalize">Market Opportunity</h1>
				<p class="py-4 text-lg">
					Africa's booming agriculture sector offers significant
					opportunities for economic advancement and food production
					growth, promising positive impacts on millions of lives and
					addressing historical challenges.
				</p>
			</div>

			<div class="mx-8 lg:mx-16 md:flex justify-between pt-8">
				<div class="">
					<h1
						class="text-2xl text-center font-semibold text-gray-600"
					>
						$40B
					</h1>
					<p class="py-3">Agriculture marketplace</p>
				</div>

				<div class="border-r border-blue-200 mx-4"></div>

				<div class="">
					<h1
						class="text-2xl text-center font-semibold text-gray-600"
					>
						60%
					</h1>
					<p class="py-3">Percentage engage in farming</p>
				</div>

				<div class="border-r border-blue-200 mx-4"></div>

				<div class="">
					<h1
						class="text-2xl text-center font-semibold text-gray-600"
					>
						Demand
					</h1>
					<p class="py-3">Global demand for agricultural product</p>
				</div>
			</div>
		</article>
	</section>

	<!-- Iwina lab features -->
	<section class="bg-white text-gray-800 font-nunito">
		<div
			class="container max-w-xl p-6 py-12 mx-auto space-y-12 lg:px-8 lg:max-w-7xl"
		>
			<div>
				<h2
					class="text-3xl font-medium tracking-tight text-center capitalize sm:text-5xl text-gray-900"
				>
					Iwina lab Features
				</h2>
				<p
					class="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600"
				>
					iWina Lab delivers tailored, innovative solutions for
					African agriculture, empowering farmers and agribusinesses.
					Explore how we can transform your endeavors.
				</p>
			</div>
			<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div>
					<div class="mt-8">
						<div class="flex py-4 border-l border-l-lime-400">
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Compliance Tracking
								</h4>
								<p class="mt-2 text-gray-600">
									Ensure your products meet international
									standards with ease. Track compliance
									progress to guarantee quality and market
									access.
								</p>
							</div>
						</div>
						<div class="flex py-4 border-l">
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Real-time Market Updates
								</h4>
								<p class="mt-2 text-gray-600">
									Stay informed with real-time market insights
									and price fluctuations. Optimize your
									production and pricing strategies for
									maximum profit.
								</p>
							</div>
						</div>
						<div class="flex py-4 border-l">
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Data Aggregation
								</h4>
								<p class="mt-2 text-gray-600">
									Access a wealth of data for informed
									decision-making. Harness data-driven
									insights to boost productivity and
									efficiency.
								</p>
							</div>
						</div>
						<div class="flex py-4 border-l">
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Quality Assurance
								</h4>
								<p class="mt-2 text-gray-600">
									Ensure the highest quality standards for
									your products. Build trust with consumers
									and partners through consistent quality.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div aria-hidden="true" class="mt-10 lg:mt-0">
					<img
						src="https://source.unsplash.com/random/360x480"
						alt=""
						class="mx-auto rounded-lg shadow-lg bg-gray-500"
					/>
				</div>
			</div>
		</div>
	</section>
	<!--  -->

	<!-- Iwina lab features continue -->
	<section class="bg-white text-gray-800 font-nunito">
		<div
			class="container max-w-xl p-6 py-12 mx-auto space-y-12 lg:px-8 lg:max-w-7xl"
		>
			<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div aria-hidden="true" class="mt-10 lg:mt-0">
					<img
						src="https://source.unsplash.com/random/360x480"
						alt=""
						class="mx-auto rounded-lg shadow-lg bg-gray-500"
					/>
				</div>

				<div>
					<div class="mt-8">
						<div class="flex py-4 border-l border-l-lime-400">
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Supply Chain Efficiency
								</h4>
								<p class="mt-2 text-gray-600">
									Streamline your supply chain from farm to
									market. Reduce waste, save resources, and
									cut down on transportation costs.
								</p>
							</div>
						</div>
						<div class="flex py-4 border-l">
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Global Market Access
								</h4>
								<p class="mt-2 text-gray-600">
									Expand your reach to international markets
									with confidence. Connect with global buyers
									and partners through our marketplace.
								</p>
							</div>
						</div>
						<div class="flex py-4 border-l">
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Sustainability
								</h4>
								<p class="mt-2 text-gray-600">
									Promote sustainable agricultural practices.
									Contribute to environmental conservation and
									long-term viability.
								</p>
							</div>
						</div>
						<div class="flex py-4 border-l">
							<div class="ml-4">
								<h4
									class="text-lg font-medium leading-6 text-gray-900"
								>
									Knowledge and Training
								</h4>
								<p class="mt-2 text-gray-600">
									Access specialized training modules to
									enhance your skills. Develop the knowledge
									required to meet compliance standards.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Get in touch -->
	<section class="bg-white dark:bg-gray-900 font-nunito">
		<div class="container px-6 py-12 mx-auto">
			<div class="text-center">
				<h1
					class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white"
				>
					Get in touch with us
				</h1>

				<p class="mt-3 text-gray-500 dark:text-gray-400">
					Let us know if there is anything we can do for you
				</p>
			</div>

			<div
				class="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-4 sm:grid-cols-2 p-8 rounded-lg bg-[url('/src/assets/images/landing/hero_section.jpg')]"
			>
				<div
					class="px-4 rounded-lg bg-gray-100 md:p-6 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40"
				>
					<span
						class="inline-block p-2 text-gray-500 rounded-lg bg-white dark:bg-gray-700"
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
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
					</span>

					<h2
						class="mt-4 text-base font-medium text-gray-800 dark:text-white"
					>
						Email
					</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Leave us an email.
					</p>
					<p class="mt-4 text-sm underline">contact@iwinalab.org</p>
				</div>

				<div class="px-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
					<span
						class="inline-block p-2 text-gray-500 rounded-lg bg-white dark:bg-gray-700"
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
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
							/>
						</svg>
					</span>

					<h2
						class="mt-4 text-base font-medium text-gray-800 dark:text-white"
					>
						Phone
					</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Give us a call during office hours
					</p>
					<p class="mt-4 text-sm underline">070-8550-1088</p>
				</div>

				<div class="px-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
					<span
						class="inline-block p-2 text-gray-500 rounded-lg bg-white dark:bg-gray-700"
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
								d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
							/>
						</svg>
					</span>

					<h2
						class="mt-4 text-base font-medium text-gray-800 dark:text-white"
					>
						Chat
					</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Use our live chat
					</p>
					<a
						href=""
						class="inline-flex mt-4 text-sm text-blue-500 dark:text-blue-400"
					>
						<span>Start chat </span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
							/>
						</svg>
					</a>
				</div>

				<div class="px-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
					<span
						class="inline-block p-2 text-gray-500 rounded-lg bg-white dark:bg-gray-700"
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
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
					</span>

					<h2
						class="mt-4 text-base font-medium text-gray-800 dark:text-white"
					>
						Location
					</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Visit our office HQ..
					</p>
					<p class="mt-4 text-sm underline">
						152, Ikpoba Slope, Benin City
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
