import { createRouter, createWebHistory , createMemoryHistory} from "vue-router"
import Home from "@/view/Home.vue"
import About from "@/view/About.vue"
import Experience from "@/view/Experience.vue"
import Activities from "@/view/Activities.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activities
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
  ]
})
  
  export default router