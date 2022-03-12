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
    name: 'Phase 1 ({{this.$root.$data.phase1.length}})',
    component: PhaseOneView
  },
  {
    path: '/phase2',
    name: 'Phase 2 ({{this.$root.$data.phase2.length}})',
    component: PhaseTwoView
  },
  {
    path: '/phase3',
    name: 'Phase 3 ({{this.$root.$data.phase3.length}})',
    component: PhaseThreeView
  },
  {
    path: '/phase4',
    name: 'Phase 4 ({{this.$root.$data.phase4.length}})',
    component: PhaseFourView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
