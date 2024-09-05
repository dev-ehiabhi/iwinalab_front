import AuthLayout from "@/layouts/AuthLayout.vue";

const productRoutes = [
	{
		path: "/marketplace",
		component: AuthLayout,
		children: [
			{
				path: "/products-list",
				name: "ProductList",
				component: () => import("@/views/products/ProductList.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "details",
				name: "ProductDetails",
				component: () => import("@/views/products/ProductDetails.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
	{
		path: "/products",
		component: AuthLayout,
		children: [
			{
				path: "/create-product",
				name: "CreateProduct",
				component: () => import("@/views/products/ProductCreate.vue"),
				meta: { requiredAuth: true },
			},
			{
				path: "/product-details",
				name: "ProductDetails",
				component: () => import("@/views/products/ProductDetails.vue"),
				meta: { requiredAuth: true },
			},
		],
	},
];

export default productRoutes;
