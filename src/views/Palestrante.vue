<template>
    <div class="palestrante-container">
      <h1>Eventos Palestrados</h1>
      <div v-if="eventosInscritos.length > 0" class="eventos-lista">
        <div v-for="evento in eventosInscritos" :key="evento.id" class="evento-item">
          <span>{{ evento.nome }}</span>
          <span>{{ evento.descricao }}</span>
          <span>{{ evento.nomeLocal }}</span>
          <span>Data: {{ evento.data }} - {{ evento.horario }}</span>
          <Button @click="sair(evento.id)">Sair do Evento</Button>
        </div>
      </div>
      <p v-else>Você não está inscrito em nenhum evento.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { EventoController } from "@/controllers/EventoController";
  import { InscricaoController } from "@/controllers/InscricaoController";
  import Button from "@/components/common/Button.vue";
  
  const eventosInscritos = ref([]);
  const palestranteId = JSON.parse(localStorage.getItem("user")).id; // ID do palestrante logado
  
  // Busca os eventos em que o palestrante está inscrito ao carregar a tela
  onMounted(async () => {
    const eventos = await EventoController.getEventos();
    eventosInscritos.value = eventos.filter((evento) =>
      evento.palestrantes.includes(palestranteId)
    );
  });
  
  const loading = ref(false);
  // Remove o palestrante de um evento
  const sair = async (eventoId) => {
    if (loading.value) return; // Evita múltiplas inscrições
    loading.value = true;
    const success = await InscricaoController.removerPalestrante(eventoId, palestranteId);
    if (success) {
      alert("Você saiu do evento com sucesso!");
      window.location.reload(); // Recarrega a página para atualizar a lista
    } else {
      alert("Erro ao sair do evento.");
    }
  };
  </script>
  
  <style scoped>
  .palestrante-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
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
  </style>