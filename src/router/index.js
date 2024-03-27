import { createRouter, createWebHistory } from 'vue-router'
import Content from '../views/Content.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import NavbarContent from '../components/NavbarContent.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Content
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/signup',
			component: Signup
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/NavCont',
			component: NavbarContent
		},
	],
})

export default router