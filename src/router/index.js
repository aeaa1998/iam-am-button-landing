import { createRouter, createWebHistory } from "vue-router";
import { Error401 } from "../views/errors";
import LandingPage from "../views/LandingPage.vue";


const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/button",
    name: "Crear Botón",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Crear Botón" */ "../views/button-creation/CreateButton.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next()
})

export default router;
