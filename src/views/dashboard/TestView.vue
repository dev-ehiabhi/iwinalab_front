<script>
import { ref } from "vue";

export default {
	setup() {
		const imageUrl = ref(null);

		const previewImage = (event) => {
			const file = event.target.files[0];
			if (file) {
				imageUrl.value = URL.createObjectURL(file);
			}
		};

		return {
			imageUrl,
			previewImage,
		};
	},
};
</script>

<template>
	<div>
		<label for="file-upload" class="custom-file-upload">
			Choose Image
		</label>
		<input
			id="file-upload"
			type="file"
			@change="previewImage"
			accept="image/*"
		/>
		<div v-if="imageUrl">
			<img :src="imageUrl" alt="Image Preview" class="image-preview" />
		</div>
	</div>
</template>

<style>
.custom-file-upload {
	display: inline-block;
	padding: 6px 12px;
	cursor: pointer;
	background-color: #007bff;
	color: white;
	border-radius: 4px;
}

.image-preview {
	margin-top: 10px;
	max-width: 100%;
	height: auto;
}
</style>
