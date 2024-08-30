import { createRouter, createWebHistory } from 'vue-router'
import guestRoutes from './modules/guests/index'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...guestRoutes,
        
    ]
})

export default router;
