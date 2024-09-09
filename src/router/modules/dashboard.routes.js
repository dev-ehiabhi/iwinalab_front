import AuthLayout from "@/layouts/AuthLayout.vue";

const dashboardRoutes = [
	{
		path: "/dashboard",
		component: AuthLayout,
		children: [
			{
				path: "",
				name: "Dashboard",
				component: () => import("@/views/dashboard/DashboardView.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
	{
		path: "/home",
		component: AuthLayout,
		children: [
			{
				path: "",
				name: "Home",
				component: () => import("@/views/dashboard/AuthHomeView.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
	{
		path: "/profile",
		component: AuthLayout,
		children: [
			{
				path: "",
				name: "Profile",
				component: () => import("@/views/dashboard/ProfileView.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
];

export default dashboardRoutes;
