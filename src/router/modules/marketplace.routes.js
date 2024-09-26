import AuthLayout from "@/layouts/AuthLayout.vue";

const marketplaceRoutes = [
	{
		path: "/marketplace",
		component: AuthLayout,
		children: [
			{
				path: "",
				name: "Marketplace",
				component: () => import("@/views/marketplace/MarketPlace.vue"),
				meta: { requiresAuth: true },
			},
			// {
			// 	path: "product-details/:id",
			// 	name: "ProductDetails",
			// 	component: () =>
			// 		import("@/views/marketplace/ProductDetails.vue"),
			// 	meta: { requiresAuth: true },
			// },
			{
				path: "shopping-cart",
				name: "ShoppingCart",
				component: () => import("@/views/marketplace/ShoppingCart.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
];

export default marketplaceRoutes;
