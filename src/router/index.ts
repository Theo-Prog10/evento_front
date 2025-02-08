import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/participante", component: () => import("@/views/Participante.vue") }, // Futura tela
  { path: "/palestrante", component: () => import("@/views/Palestrante.vue") }, // Futura tela
  { path: "/organizador", component: () => import("@/views/Organizador.vue") }, // Futura tela
  { path: "/editar-perfil", component: () => import("@/views/EditarPerfil.vue") }, // Futura tela
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;