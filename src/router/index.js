import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BussesView from '@/views/BussesView.vue'
import BusEditor from '@/views/BusEditor.vue'
import DriversView from '@/views/DriversView.vue'
import DriverEditor from '@/views/DriverEditor.vue'
import AssignmentsView from '@/views/AssignmentsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/busses',
    name: 'busses',
    component: BussesView,
  },
  {
    path: '/busses/config:id?',
    name: 'bus',
    component: BusEditor,
  },
  {
    path: '/drivers',
    name: 'drivers',
    component: DriversView,
  },
  {
    path: '/drivers/config:id?',
    name: 'driver',
    component: DriverEditor,
  },
  {
    path: '/assignments',
    name: 'assignments',
    component: AssignmentsView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
