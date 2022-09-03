import { createRouter, createWebHashHistory } from 'vue-router'
import layout from "../views/layout.vue"
const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirct:'layout',
  //   chilren:[
  //     {
  //     path:'/search',
  //     component:()=>import('../views/search.vue')
  //     },
  //     {
  //     path:'/select',
  //     component:()=>import('../views/select.vue')
  //     }
  // ]
  },
  { path: '/layout', redirect: '/' },
  { path: '/home', redirect: '/' },
  {
    path:"/search",
    name:"search",
    component:()=>import('../views/search.vue')
  },
  {
    path:"/select",
    name:"select",
    component:()=>import('../views/select.vue')
  },
  {
    path:'/select2',
    name:"select2",
    component:()=>import('../views/select2.vue')
  },
  {
    path:'/select3',
    name:"select3",
    component:()=>import('../views/select3.vue')
  },
  {
    path:'/get',
    name:"get",
    component:()=>import('../views/get.vue')
  },
  {
    path:'/questionnaire',
    name:"questionnaire",
    component:()=>import('../views/questionnaire.vue')
  },
  {
    path:'/:path(.*)',
    component:()=>import('../views/notfound.vue')
  }
]
  

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to,from,next)=>{
  next()
})

export default router
