<template>
  <div class="organizador-container">
    <header class="organizador-header">
      <Button class="button" @click="goToDashboard">Dashboard</Button>
      <Button class="button" @click="goToCriarEvento">Criar Evento</Button>
      <Button class="button" @click="goToCriarLocal">Criar Local</Button>
    </header>

    <h1>Eventos Organizados</h1>
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
      <p>Carregando eventos organizados...</p>
    </div>
    <div v-else>
      <div v-if="eventosOrganizados.length > 0" class="eventos-lista">
        <div v-for="evento in eventosOrganizados" :key="evento.id" class="evento-item">
          <h2>{{ evento.nome }}</h2>
          <p>{{ evento.descricao }}</p>
          <p>{{ evento.nomeLocal }}</p>
          <p>{{ formatarData(evento.data) }} - {{ evento.horario }}</p>
          <div class="evento-actions">
            <Button @click="exibirDetalhes(evento.id)">Exibir Detalhes</Button>
            <Button class="editar" @click="editarEvento(evento.id)">Editar</Button>
            <Button class="delete" @click="removerEvento(evento.id)">Deletar</Button>
          </div>
        </div>
      </div>
      <p v-else>Você não organiza nenhum evento no momento.</p>
    </div>
  </div>
</template>

  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { EventoController } from "@/controllers/EventoController";
  import Button from "@/components/common/Button.vue";
  
  const router = useRouter();
  const eventosOrganizados = ref([]);
  const organizadorId = JSON.parse(localStorage.getItem("user")).id;
  
  onMounted(async () => {
    loading.value = true;
    const eventos = await EventoController.getEventos();
    eventosOrganizados.value = eventos.filter(
      (evento) => evento.idOrganizador === organizadorId
    );
    loading.value = false;
  });

  const loading = ref(false);

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };
  
  const goToDashboard = () => {
    router.push("/dashboard");
  };

  const goToCriarEvento = () => {
    router.push("/criar-evento");
  };
  
  const goToCriarLocal = () => {
    router.push("/criar-local");
  };
  
  const editarEvento = (eventoId) => {
    router.push(`/editar-evento/${eventoId}`);
  };
  
  const removerEvento = async (eventoId) => {
    if (loading.value) return;
    loading.value = true;
    const success = await EventoController.removerEvento(eventoId);
    if (success) {
      alert("Evento removido com sucesso!");
      window.location.reload();
    } else {
      alert("Erro ao deletar o evento.");
    }
  };
  
  const exibirDetalhes = (eventoId) => {
    router.push(`/detalhes-evento/${eventoId}`);
  };
  </script>
  
  <style scoped>
  .organizador-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .organizador-header {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .eventos-lista {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .evento-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .evento-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .delete {
    background-color: #f44336;
    color: white;
  }

  .editar {
    background-color: #d3b50c;
    color: white;
  }

  .button {
    background-color: #4caf50;
    color: white;
  }
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #4caf50;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
  </style>