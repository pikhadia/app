import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Views/Home.vue';



const routes = [
    {
        path: '/Views',
        name: 'Home',
        component: Home
    }
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
