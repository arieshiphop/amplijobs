import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import EmployeePage from '../pages/EmployeePage.vue';
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/ofertas",
    name: "Ofertas",
    component: EmployeePage,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
