<script setup>
import AuthAppHeader from "@/components/AuthAppHeader.vue";
import AppAside from "@/components/AppAside.vue";
</script>

<template>
	<div class="relative w-full">
		<AuthAppHeader />

		<!-- <div class="relative w-full flex flex-row justify-between"> -->
		<div class="relative w-full grid grid-cols-12 justify-between">
			<div class="relative col-start-1 col-end-4 lg:col-end-3">
				<AppAside />
			</div>

			<main
				class="relative bg-gray-50 col-start-4 lg:col-start-3 col-end-13 p-8"
			>
				<router-view />
			</main>
		</div>
	</div>

	<!-- <AuthAppFooter/> -->
</template>
