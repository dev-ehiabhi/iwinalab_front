import AuthLayout from "@/layouts/AuthLayout.vue";

const productRoutes = [
	{
		path: "/marketplace",
		component: AuthLayout,
		children: [
			{
				path: "",
				name: "Marketplace",
				component: () => import("@/views/products/MarketPlace.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
	{
		path: "/my-store",
		component: AuthLayout,
		children: [
			{
				path: "product-list",
				name: "ProductIndex",
				component: () => import("@/views/mystore/ProductIndex.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "products/add-product",
				name: "ProductCreate",
				component: () => import("@/views/mystore/ProductCreate.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "products/edit-product/:id",
				name: "ProductUpdate",
				component: () => import("@/views/mystore/ProductEdit.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
	{
		path: "/products",
		component: AuthLayout,
		children: [
			{
				path: "products-list",
				name: "ProductList",
				component: () => import("@/views/products/ProductList.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "create-product",
				name: "CreateProduct",
				component: () => import("@/views/products/ProductCreate.vue"),
				meta: { requiredAuth: true },
			},
			{
				path: ":id",
				name: "ProductDetails",
				component: () => import("@/views/products/ProductDetails.vue"),
				meta: { requiredAuth: true },
			},
		],
	},
];

export default productRoutes;
