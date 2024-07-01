import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

const routes = [
  {path: "/login", component: Login},
  {path: "/register", component: Register},
  {path: "/", component: Home},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const isAuthenticated =
      !!localStorage.getItem("accessToken") &&
      !!localStorage.getItem("refreshToken");

    // Paths that should only be accessible if the user is not authenticated
    const authPaths = ["/login", "/register"];

    if (authPaths.includes(to.path) && isAuthenticated) {
      next("/");
    } else if (!authPaths.includes(to.path) && !isAuthenticated) {
      next("/login");
    } else {
      next();
    }
  }
);

export default router;
