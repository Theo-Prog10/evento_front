import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import Participante from "@/views/Participante.vue";
import Palestrante from "@/views/Palestrante.vue";
import Organizador from "@/views/Organizador.vue";
import EditarPerfil from "@/views/EditarPerfil.vue";
import CriarLocal from "@/views/CriarLocal.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/participante", component: Participante },
  { path: "/palestrante", component: Palestrante },
  { path: "/organizador", component: Organizador },
  { path: "/editar-perfil", component: EditarPerfil },
  { path: "/criar-local", component: CriarLocal },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;