import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/",
    name: "commanders-details",
    component: () => import("./components/Commander")
  },
  {
    path: "/addc",
    name: "add-commanders",
    component: () => import("./components/AddCommander")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
