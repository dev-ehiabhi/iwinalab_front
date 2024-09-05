<script setup lang="ts">
defineProps<{
	loading: boolean;
}>();
</script>

<template>
	<div v-show="loading" class="flex items-center justify-center space-x-2">
		<div class="w-2 h-2 rounded-full animate-pulse bg-orange-400"></div>
		<div class="w-2 h-2 rounded-full animate-pulse bg-orange-400"></div>
		<div class="w-2 h-2 rounded-full animate-pulse bg-orange-400"></div>
	</div>
</template>
