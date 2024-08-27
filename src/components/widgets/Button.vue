<script setup>
defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>

<template>
    <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...">
        {{ text }}
    </button>
</template>