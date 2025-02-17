import { createRouter, createWebHashHistory } from 'vue-router'
import { Layout } from '@/layout'

export const routes: any[] = [
  {
    path: '/title',
    name: 'title',
    meta: { title: '标题素材' },
    component: () => import('@/pages/title/index.vue'),
  },
  // {
  //   path: '/border',
  //   name: 'border',
  //   meta: { title: '边框素材' },
  //   component: () => import('@/pages/border/index.vue'),
  // },
  {
    path: '/chart',
    name: 'chart',
    meta: { title: '图表素材' },
    component: () => import('@/pages/chart/index.vue'),
  },
  // {
  //   path: '/fonts',
  //   name: 'fonts',
  //   meta: { title: '字体素材' },
  //   component: () => import('@/pages/title/index.vue'),
  // },
  // {
  //   path: '/bgi',
  //   name: 'bgi',
  //   meta: { title: '背景素材' },
  //   component: () => import('@/pages/border/index.vue'),
  // },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/title',
      component: Layout,
      children: [...routes],
    },
  ],
})

export default router
