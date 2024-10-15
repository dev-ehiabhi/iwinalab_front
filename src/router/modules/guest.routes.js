import IndexView from "@/views/IndexView.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";

const guestRoutes = [
	{
		path: "/",
		component: GuestLayout,
		children: [
			{
				path: "",
				name: "IndexView",
				component: IndexView,
				meta: { requiresAuth: false },
			},
			{
				path: "/register",
				name: "Register",
				component: () => import("@/views/auth/RegisterView.vue"),
				meta: { requiresAuth: false },
			},
			{
				path: "/login",
				name: "Login",
				component: () => import("@/views/auth/LoginView.vue"),
				meta: { requiresAuth: false },
			},
			{
				path: "/about-us",
				name: "About",
				// route level code-splitting
				// this generates a separate chunk (About.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import("@/views/AboutView.vue"),
				meta: { requiresAuth: false },
			},
			{
				path: "/contact-us",
				name: "Contact",
				component: () => import("@/views/ContactView.vue"),
				meta: { requiresAuth: false },
			},
		],
	},
	{
		path: "/page-not-found",
		name: "NotFound",
		component: () => import("@/views/NotFound.vue"),
	},
	{
		path: "/server-error",
		name: "ServerError",
		component: () => import("@/views/ServerError.vue"),
	},
];

export default guestRoutes;
