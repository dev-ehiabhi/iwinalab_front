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


// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters['authModule/authenticatedStatus']) {
//             return next()
//         } else {
//             return next({path: '/'})
//         }
//     } 

//     if (!to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters['authModule/authenticatedStatus']) {
//             return next(false)
//         } else {
//             return next()
//         }
//     }

// })



export default router;
