import { createRouter, createWebHistory } from 'vue-router'
import GuestLayout from '/src/layouts/GuestLayout.vue'
import AuthLayout from '/src/layouts/AuthLayout.vue'
import Home from '/src/views/Home.vue'
import Register from '/src/views/auth/Register.vue'
import Login from '/src/views/auth/Login.vue'

const routes = [
    { 
        path: '/',
        name: 'Public',
        component: GuestLayout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            }
        ]
    },
    { 
        path: '/register',
        name: 'Auth',
        component: GuestLayout,
        redirect: '/register',
        children: [
            {
                path: '/register',
                name: 'Register',
                component: Register
            }
        ]
    },
    { 
        path: '/login',
        name: 'AuthLogin',
        component: GuestLayout,
        redirect: '/login',
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router