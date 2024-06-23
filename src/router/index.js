import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/emp',
    name: 'emp',
    component: () => import('../views/tilar/EmpView.vue')
  },
  {
    path: '/dept',
    name: 'dept',
    component: () => import('../views/tilar/DeptView.vue')
  },
  {
    path:  '/',
    redirect: '/dept',
  }
]

const router = new VueRouter({
  routes
})

export default router
