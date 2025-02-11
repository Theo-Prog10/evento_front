<template>
    <div class="dashboard-container">
      <header class="dashboard-header">
        <Button class="edit-profile-button" @click="goToEditProfile">Editar Perfil</Button>
      </header>
  
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
  
  onMounted(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/login"); 
    } else {
      userNome.value = user.nome;
    }
  });
  
  const goToParticipante = () => {
    router.push("/participante");
  };
  
  const goToPalestrante = () => {
    router.push("/palestrante");
  };
  
  const goToOrganizador = () => {
    router.push("/organizador");
  };
  
  const goToEditProfile = () => {
    router.push("/editar-perfil");
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