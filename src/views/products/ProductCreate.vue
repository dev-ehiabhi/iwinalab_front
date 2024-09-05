<script setup lang="ts">
import BreadCrumb from "@/components/BreadCrumb.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
</script>

<template>
	<div class="w-full">
		<BreadCrumb prev="Products" current="Add New Product" />

		<div>Product List</div>

		<div class="bg-white h-screen w-full border my-8 rounded-lg">
			<p class="text-2xl font-semibold p-4">Products</p>

			<div>
				<img src="" alt="" />
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>
