import {createRouter, createWebHistory} from 'vue-router';

import listProducts from "./components/ProductDetails/ListProducts.vue";
import cartItems from './components/CartDetails/CartItems.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        { path: '/products', component: listProducts},
        {path: '/cart', component: cartItems}
    ] 
})

export default router;