<template>
    <div class="dashboard-container">
      <!-- Cabeçalho com botão de editar perfil -->
      <header class="dashboard-header">
        <Button class="edit-profile-button" @click="goToEditProfile">Editar Perfil</Button>
      </header>
  
      <!-- Conteúdo principal com os botões de opções -->
      <main class="dashboard-main">
        <h1>Bem-vindo, {{ userNome }}!</h1>
        <div class="options">
          <Button @click="goToParticipante">Participante</Button>
          <Button @click="goToPalestrante">Palestrante</Button>
          <Button @click="goToOrganizador">Organizador</Button>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import Button from "@/components/common/Button.vue";
  
  const router = useRouter();
  const userNome = ref("");
  
  // Busca os dados do usuário ao carregar a tela
  onMounted(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/login"); // Redireciona para o login se não estiver logado
    } else {
      userNome.value = user.nome; // Exibe o nome do usuário
    }
  });
  
  // Funções de redirecionamento
  const goToParticipante = () => {
    router.push("/participante"); // Redireciona para a tela de participante
  };
  
  const goToPalestrante = () => {
    router.push("/palestrante"); // Redireciona para a tela de palestrante
  };
  
  const goToOrganizador = () => {
    router.push("/organizador"); // Redireciona para a tela de organizador
  };
  
  const goToEditProfile = () => {
    router.push("/editar-perfil"); // Redireciona para a tela de edição de perfil
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 20px;
  }
  
  .dashboard-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  
  .edit-profile-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .dashboard-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .options {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  
  .options button {
    padding: 15px 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #2196f3;
    color: white;
  }
  
  .options button:hover {
    background-color: #1976d2;
  }
  </style>