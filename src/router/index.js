import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/show-todos",
    name: "ShowTodos",
    component: () => import("../views/ShowTodos.vue"),
    meta: {
      title: "Show Todos",
    },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
