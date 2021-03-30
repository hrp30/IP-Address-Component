import Vue from 'vue'
import VueRouter from 'vue-router'
import IpComp from "../components/IpComp";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ip',
    component: IpComp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
