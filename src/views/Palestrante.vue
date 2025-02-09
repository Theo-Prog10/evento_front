<template>
  <div class="palestrante-container">
    <h1>Eventos Disponíveis</h1>
    <div v-if="eventosDisponiveis.length > 0" class="eventos-lista">
      <div v-for="evento in eventosDisponiveis" :key="evento.id" class="evento-item">
        <h2>{{ evento.nome }}</h2>
        <p>{{ evento.descricao }}</p>
        <p>{{ evento.nomeLocal }}</p>
        <p>Data: {{ evento.data }} - {{ evento.horario }}</p>
        <Button @click="inscrever(evento.id)">Inscrever-se como Palestrante</Button>
      </div>
    </div>
    <p v-else>Nenhum evento disponível no momento.</p>

    <h1>Eventos Palestrados</h1>
    <div v-if="eventosPalestrados.length > 0" class="eventos-lista">
      <div v-for="evento in eventosPalestrados" :key="evento.id" class="evento-item">
        <span>{{ evento.nome }}</span>
        <span>{{ evento.descricao }}</span>
        <span>{{ evento.nomeLocal }}</span>
        <span>Data: {{ evento.data }} - {{ evento.horario }}</span>
        <Button @click="sair(evento.id)">Sair do Evento</Button>
      </div>
    </div>
    <p v-else>Você não está palestrando em nenhum evento.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { EventoController } from "@/controllers/EventoController";
import { InscricaoController } from "@/controllers/InscricaoController";
import Button from "@/components/common/Button.vue";

const eventosDisponiveis = ref([]);
const eventosPalestrados = ref([]);
const palestranteId = JSON.parse(localStorage.getItem("user")).id; // ID do palestrante logado

// Busca os eventos disponíveis e os eventos palestrados ao carregar a tela
onMounted(async () => {
  const eventos = await EventoController.getEventos();

  eventosDisponiveis.value = eventos.filter(
    (evento) => Array.isArray(evento.palestrantes) && !evento.palestrantes.includes(palestranteId)
  );

  eventosPalestrados.value = eventos.filter(
    (evento) => Array.isArray(evento.palestrantes) && evento.palestrantes.includes(palestranteId)
  );
});

const loading = ref(false);

// Inscreve o palestrante em um evento
const inscrever = async (eventoId) => {
  if (loading.value) return; // Evita múltiplas inscrições
  loading.value = true;
  const success = await InscricaoController.inscreverPalestrante(eventoId, palestranteId);
  if (success) {
    alert("Inscrito como palestrante com sucesso!");
    window.location.reload(); // Recarrega a página para atualizar a lista
  } else {
    alert("Erro ao inscrever-se como palestrante.");
  }
  loading.value = false;
};

// Remove o palestrante de um evento
const sair = async (eventoId) => {
  if (loading.value) return; // Evita múltiplas ações
  loading.value = true;
  const success = await InscricaoController.removerPalestrante(eventoId, palestranteId);
  if (success) {
    alert("Você saiu do evento com sucesso!");
    window.location.reload(); // Recarrega a página para atualizar a lista
  } else {
    alert("Erro ao sair do evento.");
  }
  loading.value = false;
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