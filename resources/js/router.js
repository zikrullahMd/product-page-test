import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        component: {template: ''}
    },
    {
        path: '/shop/product/:slug',
        name: 'product',
        component: () => import('./views/Product.vue')
    }
  ],
})

export default router;