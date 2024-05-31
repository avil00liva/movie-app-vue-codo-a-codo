import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";

import Home from "../views/Home.vue";
import MovieDetails from "../views/MovieDetails.vue";
import Login from "../views/Login.vue";
import MoreMovies from "../views/MoreMovies.vue";
import MovieDetailsApi from "../views/MovieDetailsApi.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/movie/:id",
    component: MovieDetails,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/more-movies",
    component: MoreMovies,
  },
  {
    path: "/more-movies/:id",
    component: MovieDetailsApi,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
