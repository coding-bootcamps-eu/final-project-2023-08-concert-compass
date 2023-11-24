import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/HomeView.vue") },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/DetailView.vue"),
  },
  {
    path: "/list/:status",
    name: "list",
    component: () => import("../views/ListView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/SearchView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
