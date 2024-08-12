import { createRouter, createWebHistory } from 'vue-router'
import CesiumViewer from '../views/CesiumViewer.vue'
import Login from '../views/LoginFirst.vue'
import Register from '../views/RegisterForm.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cesium',
      name: 'cesium',
      component: CesiumViewer
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }

  ]
})

export default router
