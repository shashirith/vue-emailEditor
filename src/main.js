import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Type from './components/Type.vue'
import Design from './components/Design.vue'
import Content from './components/Content.vue'
import Targeting from './components/Targeting.vue'
import Behaviour from './components/Behavior.vue'

const routes = [
    
    {
        path: '/',
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
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

const app = createApp(App);
app.use(router)
app.mount('#app')
