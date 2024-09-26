<script setup lang="ts">
defineProps<{
	prev: string;
	current: string;
}>();
</script>

<template>
	<nav
		aria-label="breadcrumb"
		class="w-full border-b border-gray-200 text-gray-800 pb-2 mb-4"
	>
		<ol class="flex space-x-2 text-gray-800">
			<li class="flex items-center">
				<span
					rel="noopener noreferrer"
					title="Back to homepage"
					class="flex items-center tracking-wider font-thin text-md"
					>{{ prev }}</span
				>
			</li>
			<li class="flex items-center space-x-1">
				<span class="text-gray-600">/</span>
				<span
					rel="noopener noreferrer"
					class="flex items-center px-1 capitalize tracking-wide text-gray-400 text-base"
					>{{ current }}</span
				>
			</li>
		</ol>
	</nav>
</template>
