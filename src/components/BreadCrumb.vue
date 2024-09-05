<script setup lang="ts">
defineProps<{
	prev: string;
	current: string;
}>();
</script>

<template>
	<nav aria-label="breadcrumb" class="w-full p-4 text-gray-800">
		<ol class="flex h-8 space-x-2 text-gray-800">
			<li class="flex items-center">
				<span
					rel="noopener noreferrer"
					title="Back to homepage"
					class="flex items-center"
					>{{ prev }}</span
				>
			</li>
			<li class="flex items-center space-x-1">
				<span class="text-gray-600">/</span>
				<span
					rel="noopener noreferrer"
					class="flex items-center px-1 capitalize"
					>{{ current }}</span
				>
			</li>
		</ol>
	</nav>
</template>
