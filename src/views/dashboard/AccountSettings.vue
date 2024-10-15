<script setup>
import { onMounted, ref } from "vue";
import UserApis from "@/services/apis/UserApis";
import { useUserStore } from "@/stores/modules/user.store";

const api = UserApis;
const userStore = useUserStore();

const first_name = ref(userStore.getUser.first_name);
const last_name = ref(userStore.getUser.last_name);
const email = ref(userStore.getUser.email);
const phone = ref(userStore.getUser.phone);

const fetchUser = async () => {
	await api
		.getUser(localStorage.getItem("userId"))
		.then((response) => {
			userStore.setUser(response.data.data);
		})
		.catch((error) => {
			console.error(error.response.data);
		});
};

onMounted(() => {
	fetchUser();
});
</script>

<template>
	<section class="p-6 bg-gray-100 text-gray-900">
		<form
			novalidate=""
			action=""
			class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
		>
			<fieldset
				class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50"
			>
				<div class="space-y-2 col-span-full lg:col-span-1">
					<p class="font-medium">Personal Information</p>
					<p class="text-xs"></p>
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					<div class="col-span-full sm:col-span-3">
						<label for="firstname" class="text-sm"
							>First name</label
						>
						<input
							v-model="first_name"
							id="firstname"
							type="text"
							placeholder="First name"
							readonly
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="lastname" class="text-sm">Last name</label>
						<input
							v-model="last_name"
							id="lastname"
							type="text"
							placeholder="Last name"
							readonly
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="email" class="text-sm">Email</label>
						<input
							v-model="email"
							id="email"
							type="email"
							placeholder="Email"
							readonly
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="phone" class="text-sm">Phone Number</label>
						<input
							v-model="phone"
							id="phone"
							type="phone"
							placeholder="Phone"
							readonly
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full">
						<label for="address" class="text-sm">Address</label>
						<input
							id="address"
							type="text"
							placeholder=""
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full sm:col-span-2">
						<label for="city" class="text-sm">City</label>
						<input
							id="city"
							type="text"
							placeholder=""
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full sm:col-span-2">
						<label for="state" class="text-sm"
							>State / Province</label
						>
						<input
							id="state"
							type="text"
							placeholder=""
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full sm:col-span-2">
						<label for="zip" class="text-sm">ZIP / Postal</label>
						<input
							id="zip"
							type="text"
							placeholder=""
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full flex justify-end my-8">
						<button
							class="bg-lime-400 text-lime-700 py-2 px-4 rounded-lg"
						>
							Submit
						</button>
						<button
							v-show="false"
							class="bg-lime-400 text-lime-700 py-2 px-3 rounded-lg"
						>
							Loading
						</button>
					</div>
				</div>
			</fieldset>
		</form>

		<div class="h-8"></div>

		<form
			novalidate=""
			action=""
			v-show="false"
			class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
		>
			<fieldset
				class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50"
			>
				<div class="space-y-2 col-span-full lg:col-span-1">
					<p class="font-medium">Profile Picture</p>
					<p class="text-xs"></p>
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					<div class="col-span-full sm:col-span-3">
						<label for="username" class="text-sm">Username</label>
						<input
							id="username"
							type="text"
							placeholder="Username"
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="website" class="text-sm">Website</label>
						<input
							id="website"
							type="text"
							placeholder="https://"
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div class="col-span-full">
						<label for="bio" class="text-sm">Bio</label>
						<textarea
							id="bio"
							placeholder=""
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
						></textarea>
					</div>
					<div class="col-span-full">
						<label for="bio" class="text-sm">Photo</label>
						<div class="flex items-center space-x-2">
							<img
								src="https://source.unsplash.com/30x30/?random"
								alt=""
								class="w-10 h-10 rounded-full bg-gray-500 bg-gray-300"
							/>
							<button
								type="button"
								class="px-4 py-2 border rounded-md border-gray-800"
							>
								Change
							</button>
						</div>
					</div>
				</div>
			</fieldset>
		</form>

		<article
			class="p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
		>
			<h2
				class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
			>
				Account settings
			</h2>

			<form>
				<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
					<div>
						<label
							class="text-gray-700 dark:text-gray-200"
							for="username"
							>Username</label
						>
						<input
							id="username"
							type="text"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
						/>
					</div>

					<div>
						<label
							class="text-gray-700 dark:text-gray-200"
							for="emailAddress"
							>Email Address</label
						>
						<input
							id="emailAddress"
							type="email"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
						/>
					</div>

					<div>
						<label
							class="text-gray-700 dark:text-gray-200"
							for="password"
							>Password</label
						>
						<input
							id="password"
							type="password"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
						/>
					</div>

					<div>
						<label
							class="text-gray-700 dark:text-gray-200"
							for="passwordConfirmation"
							>Password Confirmation</label
						>
						<input
							id="passwordConfirmation"
							type="password"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
						/>
					</div>
				</div>

				<div class="flex justify-end mt-6">
					<button
						class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
					>
						Save
					</button>
				</div>
			</form>
		</article>
	</section>
</template>
