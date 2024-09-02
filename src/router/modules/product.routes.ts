import AuthLayout from '@/layouts/AuthLayout.vue'

const productRoutes = [
    {
        path: '/product',
        component: AuthLayout,   
        children: [
            {
                path: '',
                name: 'ProductList',
                component: () => import('@/views/products/ProductList.vue')
            },
            {
                path: '/details',
                name: 'ProductDetails',
                component: () => import('@/views/products/ProductDetails.vue'),
            },
            
        ],
    },
];

export default productRoutes;