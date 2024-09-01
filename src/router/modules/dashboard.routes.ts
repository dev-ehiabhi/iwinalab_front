import AuthLayout from "@/layouts/AuthLayout.vue";

const dashboardRoutes = [
    {
        path: '/dashboard',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () => import('@/views/dashboard/DashboardView.vue')
            }
        ],
    },
    {
        path: '/home',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/dashboard/AuthHomeView.vue')
            }
        ]
    },
    {
        path: '/profile',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'Profile',
                component: () => import('@/views/dashboard/ProfileView.vue')
            }
        ]
    },
];

export default dashboardRoutes;