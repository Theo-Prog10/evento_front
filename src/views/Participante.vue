<template>
    <div class="participante-container">
        <header class="participante-header">
            <Button class = "button" @click="goToDashboard">Dashboard</Button>
        </header>
        <h1>Eventos Disponíveis</h1>
        <div v-if="eventosDisponiveis.length > 0" class="eventos-lista">
        <div v-for="evento in eventosDisponiveis" :key="evento.id" class="evento-item">
            <h2>{{ evento.nome }}</h2>
            <span>{{ evento.descricao }}</span>
            <span>{{ evento.nomeLocal }}</span>
            <span>{{ evento.data }} - {{ evento.horario }}</span>
            <Button @click="inscrever(evento.id)">Inscrever-se</Button>
        </div>
    </div>
    <p v-else>Nenhum evento disponível no momento.</p>
  
    <h1>Eventos Inscritos</h1>
    <div v-if="eventosInscritos.length > 0" class="eventos-lista">
        <div v-for="evento in eventosInscritos" :key="evento.id" class="evento-item">
            <h2>{{ evento.nome }}</h2>
            <span>{{ evento.descricao }}</span>
            <span>{{ evento.nomeLocal }}</span>
            <span>{{ evento.data }} - {{ evento.horario }}</span>
            <Button class="sair" @click="sair(evento.id)">Sair do Evento</Button>
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
    import { useRouter } from "vue-router";
    
    const eventosDisponiveis = ref([]);
    const eventosInscritos = ref([]);
    const participanteId = JSON.parse(localStorage.getItem("user")).id; // ID do participante logado

    const router = useRouter();
    // Redireciona para o dashboard
    const goToDashboard = () => {
        router.push("/dashboard");
    };
    
    onMounted(async () => {
    const eventos = await EventoController.getEventos();
  
    eventosDisponiveis.value = eventos.filter(
        (evento) => Array.isArray(evento.participantes) && !evento.participantes.includes(participanteId)
    );

    eventosInscritos.value = eventos.filter(
        (evento) => Array.isArray(evento.participantes) && evento.participantes.includes(participanteId)
    );
});
    const loading = ref(false);
    // Inscreve o participante em um evento
    const inscrever = async (eventoId) => {
        if (loading.value) return; // Evita múltiplas inscrições
        loading.value = true;
        const success = await InscricaoController.inscreverParticipante(eventoId, participanteId);
        if (success) {
            alert("Inscrito com sucesso.");
            window.location.reload(); // Recarrega a página para atualizar a lista
        } else {
            alert("Erro ao inscrever-se no evento.");
        }
    };
  
  // Remove o participante de um evento
    const sair = async (eventoId) => {
        const success = await InscricaoController.removerParticipante(eventoId, participanteId);
        if (success) {
            alert("Desinscrito com sucesso.");
            window.location.reload(); // Recarrega a página para atualizar a lista
        } else {
        alert("Erro ao sair do evento.");
        }
    };
</script>
  
  <style scoped>
  .participante-container {
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

  .sair {
  background-color: #f44336;
  color: white;
  }
  .button {
    background-color: #4caf50;
    color: white;
  }
  .participante-header {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 20px;
  }

  </style>