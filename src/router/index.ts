import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import Participante from "@/views/Participante.vue";
import EditarPerfil from "@/views/EditarPerfil.vue";
import Palestrante from "@/views/Palestrante.vue";
import Organizador from "@/views/Organizador.vue";
import CriarLocal from "@/views/CriarLocal.vue";
import EditarEvento from "@/views/EditarEvento.vue";
import CriarEvento from "@/views/CriarEvento.vue";
import DetalhesEvento from "@/views/DetalhesEvento.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/participante", component: Participante },
  { path: "/editar-perfil", component: EditarPerfil },
  { path: "/palestrante", component: Palestrante },
  { path: "/organizador", component: Organizador },
  { path: "/editar-perfil", component: EditarPerfil },
  { path: "/criar-local", component: CriarLocal },
  { path: "/editar-evento/:id", component: EditarEvento },
  { path: "/criar-evento", component: CriarEvento },
  { path: "/detalhes-evento/:id", component: DetalhesEvento }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;