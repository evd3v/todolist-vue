import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    redirect: '/',
    component: () => import('@/components/PathThrough'),
    children: [
      {
        path: 'new',
        name: 'NewTask',
        component: () => import('@/views/tasks/NewTask')
      }
    ]
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
