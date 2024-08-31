import AuthLayout from "@/layouts/AuthLayout.vue";

const dashboardRoutes = [
    {
        path: '/dashboard',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () => import('@/views/dashboard/DashboardView.vue'),
            }
        ],
    }
];

export default dashboardRoutes;