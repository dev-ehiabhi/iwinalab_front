<script setup>
import { ref, onMounted } from "vue";
import logo from "@/assets/images/general/iwina_logo.png";
import Swal from "sweetalert2";
import AuthApis from "@/services/apis/AuthApis";
import UserApis from "@/services/apis/UserApis";
import { useAuthStore } from "@/stores/auth_store";
import { useUserStore } from "@/stores/modules/user.store";
import { useRouter } from "vue-router";

const toggle_status = ref(false);

const changeToggleStatus = () => {
	toggle_status.value = !toggle_status.value;
};

const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.onmouseenter = Swal.stopTimer;
		toast.onmouseleave = Swal.resumeTimer;
	},
});

const api = AuthApis;
const _api = UserApis;
const authStore = useAuthStore();
const userStore = useUserStore();
const router = useRouter();

onMounted(() => {
	fetchUser();
});

const fetchUser = async () => {
	await _api
		.getUser(localStorage.getItem("userId"))
		.then((response) => {
			userStore.setUser(response.data.data);
		})
		.catch((error) => {
			console.error(error.response.data);
		});
};

const logout = () => {
	api.logoutUser()
		.then((response) => {
			Toast.fire({
				icon: "success",
				title: response.data.message,
			});
			localStorage.clear();
			authStore.$reset();
			router.push({ path: "/" });
		})
		.catch((error) => {
			Toast.fire({
				icon: "error",
				title: error.response.data.message,
			});
		});
};
</script>

<template>
	<nav class="relative bg-white shadow-lg dark:bg-gray-800">
		<div class="px-6 md:px-8 py-4 mx-auto lg:hidden">
			<div class="flex items-center justify-between">
				<RouterLink to="/dashboard">
					<img class="w-auto h-8 lg:10" :src="logo" alt="" />
				</RouterLink>

				<!-- Mobile menu button -->
				<!-- <div ref="componentRef" class="flex md:hidden"> -->
				<div class="flex">
					<button
						@click.stop="changeToggleStatus"
						type="button"
						class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
						aria-label="toggle menu"
					>
						<svg
							v-show="!toggle_status"
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 8h16M4 16h16"
							/>
						</svg>

						<svg
							v-show="toggle_status"
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
				:class="[
					toggle_status
						? 'translate-x-0 opacity-100'
						: 'opacity-0 -translate-x-full',
				]"
				class="absolute inset-x-0 z-20 w-full py-4 transition-all duration-500 ease-in-out bg-white border-b dark:bg-gray-800 lg:hidden"
			>
				<div class="flex flex-col px-6 -mx-4">
					<RouterLink
						to="/dashboard"
						class="flex items-center px-3 py-4 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-5 h-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
							/>
						</svg>

						<span class="mx-2 text-sm font-medium">Dashboard</span>
					</RouterLink>

					<RouterLink
						to="/training-resources"
						v-show="userStore.getUser.role_id == 200"
						class="flex items-center px-3 py-4 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
							/>
						</svg>

						<span class="mx-2 text-sm font-medium"
							>Training Resources</span
						>
					</RouterLink>

					<RouterLink
						to="/my-store/product-list"
						class="flex items-center px-3 py-4 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-5 h-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>

						<span class="mx-2 text-sm font-medium">My Store</span>
					</RouterLink>

					<RouterLink
						to="/marketplace"
						class="flex items-center px-3 py-4 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
							/>
						</svg>

						<span class="mx-2 text-sm font-medium"
							>Marketplace</span
						>
					</RouterLink>

					<RouterLink
						to="/profile"
						class="flex items-center px-3 py-4 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
							/>
						</svg>

						<span class="mx-2 text-sm font-medium">Profile</span>
					</RouterLink>

					<form
						name="logout"
						@submit.prevent="logout()"
						class="flex items-center px-2 py-4 bg-red-100"
					>
						<button
							type="submit"
							class="flex text-red-500 font-medium transition-colors duration-200 dark:text-red-400 hover:font-semibold hover:text-red-500 dark:hover:text-red-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 rotate-180"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
								/>
							</svg>
							<span class="px-2"> Logout </span>
						</button>
					</form>
				</div>
			</div>
		</div>
	</nav>
</template>
