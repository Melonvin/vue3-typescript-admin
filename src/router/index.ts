import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/hello", component: () => import("../components/HelloWorld.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
