<script></script>

<template>
	<div class="w-full px-3 mb-8">
		<label
			class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center"
			htmlFor="dropzone-file"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10 text-green-800"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
				/>
			</svg>

			<h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">
				Category image
			</h2>

			<p class="mt-2 text-gray-500 tracking-wide">
				Upload or drag & drop your file SVG, PNG, JPG or GIF.
			</p>

			<input
				id="dropzone-file"
				type="file"
				class="hidden"
				name="category_image"
				accept="image/png, image/jpeg, image/webp"
			/>
		</label>
	</div>
</template>
