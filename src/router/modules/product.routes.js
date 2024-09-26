import AuthLayout from "@/layouts/AuthLayout.vue";

const productRoutes = [
	{
		path: "/my-store",
		component: AuthLayout,
		children: [
			{
				path: "statistic",
				name: "Statistic",
				component: () => import("@/views/mystore/StoreStatistic.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "product-list",
				name: "ProductIndex",
				component: () =>
					import("@/views/mystore/product/ProductIndex.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "products/add-product",
				name: "ProductCreate",
				component: () =>
					import("@/views/mystore/product/ProductCreate.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "products/add-product-details/:id",
				name: "AddProductDetails",
				component: () =>
					import("@/views/mystore/product/ProductAddDetails.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "products/add-product-compliance/:id",
				name: "AddProductCompliance",
				component: () =>
					import("@/views/mystore/product/ProductAddCompliance.vue"),
				meta: { requiresAuth: true },
			},
			{
				path: "products/edit-product/:id",
				name: "ProductUpdate",
				component: () =>
					import("@/views/mystore/product/ProductEdit.vue"),
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
