import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import MoviePage from '../views/MoviePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: MoviePage
    }
  ]
});

export default router;