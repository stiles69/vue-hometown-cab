import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Contact
        },
        {
            path: '/#contact',
            name: 'Contact',
            component: Contact
        }
    ]
})