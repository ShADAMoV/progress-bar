import { createRouter, createWebHistory } from 'vue-router';
import DHome from '@/components/pages/DHome.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DHome,
    },
  ],
});

export default router;
