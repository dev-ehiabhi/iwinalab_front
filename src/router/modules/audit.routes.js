import AuthLayout from "@/layouts/AuthLayout.vue";

const auditRoutes = [
	{
		path: "/audit",
		component: AuthLayout,
		children: [
			{
				path: "request",
				name: "AuditRequest",
				component: () => import("@/views/audit/AuditRequest.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
];

export default auditRoutes;
