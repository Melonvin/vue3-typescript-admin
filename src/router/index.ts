import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/layout/index.vue') },

  {
    name: 'Login',
    path: '/login',
    component: () => import('@/view/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
