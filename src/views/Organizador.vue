<template>
    <div class="organizador-container">
      <!-- Cabeçalho com botões de criar evento e local -->
      <header class="organizador-header">
        <Button @click="goToCriarEvento">Criar Evento</Button>
        <Button @click="goToCriarLocal">Criar Local</Button>
      </header>
  
      <!-- Lista de eventos organizados -->
      <h1>Eventos Organizados</h1>
      <div v-if="eventosOrganizados.length > 0" class="eventos-lista">
        <div v-for="evento in eventosOrganizados" :key="evento.id" class="evento-item">
          <h2>{{ evento.nome }}</h2>
          <p>{{ evento.descricao }}</p>
          <p>Data: {{ evento.data }} | Horário: {{ evento.horario }}</p>
          <div class="evento-actions">
            <Button @click="editarEvento(evento.id)">Editar</Button>
            <Button @click="removerEvento(evento.id)">Remover</Button>
          </div>
        </div>
      </div>
      <p v-else>Você não organiza nenhum evento no momento.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { EventoController } from "@/controllers/EventoController";
  import Button from "@/components/common/Button.vue";
  
  const router = useRouter();
  const eventosOrganizados = ref([]);
  const organizadorId = JSON.parse(localStorage.getItem("user")).id; // ID do organizador logado
  
  // Busca os eventos organizados ao carregar a tela
  onMounted(async () => {
    const eventos = await EventoController.getEventos();
    eventosOrganizados.value = eventos.filter(
      (evento) => evento.idOrganizador === organizadorId
    );
  });
  
  // Redireciona para a tela de criação de evento
  const goToCriarEvento = () => {
    router.push("/criar-evento");
  };
  
  // Redireciona para a tela de criação de local
  const goToCriarLocal = () => {
    router.push("/criar-local");
  };
  
  // Edita um evento (vamos implementar a tela de edição no futuro)
  const editarEvento = (eventoId) => {
    router.push(`/editar-evento/${eventoId}`);
  };
  
  // Remove um evento
  const removerEvento = async (eventoId) => {
    const success = await EventoController.removerEvento(eventoId);
    if (success) {
      alert("Evento removido com sucesso!");
      window.location.reload(); // Recarrega a página para atualizar a lista
    } else {
      alert("Erro ao remover o evento.");
    }
  };
  </script>
  
  <style scoped>
  .organizador-container {
    max-width: 800px;
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
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 5px;
  }
  
  .evento-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  </style>