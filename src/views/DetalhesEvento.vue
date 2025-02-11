<template>
    <div class="detalhes-evento-container">
      <h1>Detalhes do Evento</h1>
      <div v-if="evento" class="evento-detalhes">
        <h2>{{ evento.nome }}</h2>
        <p>Descrição: {{ evento.descricao }}</p>
        <p>Local: {{ evento.nomeLocal }}</p>
        <p>Data: {{ formatarData(evento.data) }} - {{ evento.horario }}</p>
  
        <h3>Palestrantes</h3>
        <ul v-if="palestrantes.length > 0">
          <li v-for="palestrante in palestrantes" :key="palestrante.id">
            {{ palestrante.nome }}
          </li>
        </ul>
        <p v-else>Nenhum palestrante inscrito.</p>
  
        <h3>Participantes</h3>
        <ul v-if="participantes.length > 0">
          <li v-for="participante in participantes" :key="participante.id">
            {{ participante.nome }}
          </li>
        </ul>
        <p v-else>Nenhum participante inscrito.</p>
      </div>
      <p v-else>Carregando detalhes do evento...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { EventoController } from "@/controllers/EventoController";
  import { PessoaController } from "@/controllers/PessoaController";
  
  const route = useRoute();
  const evento = ref(null);
  const palestrantes = ref([]);
  const participantes = ref([]);

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };
  
  onMounted(async () => {
    const eventoId = route.params.id;
    const eventoDetalhes = await EventoController.getEvento(eventoId);
    evento.value = eventoDetalhes;
  
    if (eventoDetalhes.palestrantes.length > 0) {
      const palestrantesNomes = await Promise.all(
        eventoDetalhes.palestrantes.map((id) => PessoaController.getProfile(id))
      );
      palestrantes.value = palestrantesNomes.filter((p) => p !== null);
    }
  
    if (eventoDetalhes.participantes.length > 0) {
      const participantesNomes = await Promise.all(
        eventoDetalhes.participantes.map((id) => PessoaController.getProfile(id))
      );
      participantes.value = participantesNomes.filter((p) => p !== null);
    }
  });
  </script>
  
  <style scoped>
  .detalhes-evento-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .evento-detalhes {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h3 {
    margin-top: 20px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    padding: 5px 0;
  }
  </style>