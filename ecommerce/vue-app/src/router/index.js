import {createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AddProductView from '../views/AddProductView.vue'
import EditProductView from '../views/EditProductView.vue'

const routes = [
    {path: '/', name:'home', component: Home},
    {path: '/product/:id', name:'product', component: ProductView},
    {path: '/add-product', name:'add-product', component: AddProductView},
    {path: '/edit-product/:id', name:'edit-product', component: EditProductView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router