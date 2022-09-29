import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/manageproject",
      component: () => import("../views/ManageProject.vue"),
    },
    {
      path: "/budgeting",
      component: () => import("../views/Budgeting.vue"),
    },
  ],
});

export default router;
