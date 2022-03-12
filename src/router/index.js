import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhaseOneView from '../views/PhaseOneView.vue'
import PhaseTwoView from '../views/PhaseTwoView.vue'
import PhaseThreeView from '../views/PhaseThreeView.vue'
import PhaseFourView from '../views/PhaseFourView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/phase1',
    name: 'phase1',
    component: PhaseOneView
  },
  {
    path: '/phase2',
    name: 'phase2',
    component: PhaseTwoView
  },
  {
    path: '/phase3',
    name: 'phase3',
    component: PhaseThreeView
  },
  {
    path: '/phase4',
    name: 'phase4',
    component: PhaseFourView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
