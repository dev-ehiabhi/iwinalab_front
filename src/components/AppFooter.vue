<script setup>
import { ref } from "vue";
const footer = ref(false);
</script>

<template>
	<div v-show="footer">Footer</div>
</template>
