import AuthLayout from "@/layouts/AuthLayout.vue";

const complianceRoutes = [
	{
		path: "/compliance-tools",
		component: AuthLayout,
		children: [
			{
				path: "",
				name: "ComplianceTools",
				component: () =>
					import("@/views/compliance/ComplianceTools.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
];

export default complianceRoutes;
