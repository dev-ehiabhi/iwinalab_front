import { createRouter, createWebHistory } from "vue-router";
import guestRoutes from "@/router/modules/guest.routes";
import dashboardRoutes from "@/router/modules/dashboard.routes";
import productRoutes from "@/router/modules/product.routes";
import marketplaceRoutes from "./modules/marketplace.routes";
import complianceRoutes from "./modules/compliance.routes";
import auditRoutes from "./modules/audit.routes";
import { useAuthStore } from "@/stores/auth_store";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...guestRoutes,
		...dashboardRoutes,
		...productRoutes,
		...marketplaceRoutes,
		...complianceRoutes,
		...auditRoutes,
	],
});

router.beforeEach((to, from) => {
	const authStore = useAuthStore();
	if (to.meta.requiresAuth && !authStore.getIsAuthenticated) {
		return {
			path: "/login",
			query: { redirect: to.fullPath },
		};
	}
});

// router.beforeEach((to, from, next) => {
// 	const authStore = useAuthStore();

// if (to.matched.some((record) => record.meta.requiresAuth)) {
// 	if (authStore.getIsAuthenticated) {
// 		return next();
// 	} else {
// 		return next({ path: "/" });
// 	}
// }

// if (!to.matched.some((record) => record.meta.requiresAuth)) {
// 	if (!authStore.getIsAuthenticated) {
// 		return next(false);
// 	} else {
// 		return next();
// 	}
// }
// });

export default router;
