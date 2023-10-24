import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Type from './views/Type.vue'
import Design from './views/Design.vue'
import Content from './views/Content.vue'
import Targeting from './views/Targeting.vue'
import Success from './views/Success.vue'
import Behaviour from './views/Behavior.vue'

const routes = [
    {
        path: '/',
        redirect: '/type'
    },
    {
        path: '/type',
        name: 'Type',
        component: Type
    },
    {
        path: '/design',
        name: 'Design',
        component: Design
    },
    {
        path: '/content',
        name: 'Content',
        component: Content
    },
    {
        path: '/targeting',
        name: 'Targeting',
        component: Targeting
    },
   
    {
        path: '/behaviour',
        name: 'Behaviour',
        component: Behaviour
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        redirect: '/type' 
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

const app = createApp(App);
app.use(router)
app.mount('#app')
