import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'
import ContactCreate from '../views/ContactCreate.vue'
import ContactEdit from '../views/ContactEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/contacts/:id',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/contacts/create',
    component: ContactCreate
  },
  {
    path: '/contacts/:id/edit',
    name: 'contacts.edit',
    component: ContactEdit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
