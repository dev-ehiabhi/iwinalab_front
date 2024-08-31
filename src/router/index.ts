import { createRouter, createWebHistory } from 'vue-router'
import guestRoutes from '@/router/modules/guest.routes'
import dashboardRoutes from '@/router/modules/dashboard.routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...guestRoutes,
        ...dashboardRoutes
    ]
})

export default router;
