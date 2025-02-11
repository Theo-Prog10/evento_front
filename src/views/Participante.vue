<template>
    <header class="participante-header">
        <Button class="button" @click="goToDashboard">Dashboard</Button>
    </header>
    <div class="participante-container">
        <div class="esquerda">
            <h1>Eventos Disponíveis</h1>
            <div v-if="loading" class="loading-container">
                <div class="spinner"></div>
                <p>Carregando eventos disponíveis...</p>
            </div>
            <div v-else>
                <div v-if="eventosDisponiveis.length > 0" class="eventos-lista">
                    <div v-for="evento in eventosDisponiveis" :key="evento.id" class="evento-item">
                        <h2>{{ evento.nome }}</h2>
                        <span>{{ evento.descricao }}</span>
                        <span>{{ evento.nomeLocal }}</span>
                        <span>{{ formatarData(evento.data) }} - {{ evento.horario }}</span>
                        <Button @click="inscrever(evento.id)">Inscrever-se</Button>
                    </div>
                </div>
                <p v-else>Nenhum evento disponível no momento.</p>
            </div>
        </div>

        <div class="direita">
            <h1>Eventos Inscritos</h1>
            <div v-if="loading" class="loading-container">
                <div class="spinner"></div>
                <p>Carregando eventos inscritos...</p>
            </div>
            <div v-else>
                <div v-if="eventosInscritos.length > 0" class="eventos-lista">
                    <div v-for="evento in eventosInscritos" :key="evento.id" class="evento-item">
                        <h2>{{ evento.nome }}</h2>
                        <span>{{ evento.descricao }}</span>
                        <span>{{ evento.nomeLocal }}</span>
                        <span>{{ formatarData(evento.data) }} - {{ evento.horario }}</span>
                        <Button class="sair" @click="sair(evento.id)">Sair do Evento</Button>
                    </div>
                </div>
                <p v-else>Você não está inscrito em nenhum evento.</p>
            </div>
        </div>
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
    const participanteId = JSON.parse(localStorage.getItem("user")).id;

    const router = useRouter();
    const goToDashboard = () => {
        router.push("/dashboard");
    };

    const formatarData = (data) => {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    };
    
    onMounted(async () => {
    loading.value = true;
    const eventos = await EventoController.getEventos();
  
    eventosDisponiveis.value = eventos.filter(
        (evento) => Array.isArray(evento.participantes) && !evento.participantes.includes(participanteId)
    );

    eventosInscritos.value = eventos.filter(
        (evento) => Array.isArray(evento.participantes) && evento.participantes.includes(participanteId)
    );
    loading.value = false;
});
    const loading = ref(false);
    const inscrever = async (eventoId) => {
        if (loading.value) return;
        loading.value = true;
        const success = await InscricaoController.inscreverParticipante(eventoId, participanteId);
        if (success) {
            alert("Inscrito com sucesso.");
            window.location.reload();
        } else {
            alert("Erro ao inscrever-se no evento.");
        }
    };
  
    const sair = async (eventoId) => {
        if (loading.value) return;
        loading.value = true;
        const success = await InscricaoController.removerParticipante(eventoId, participanteId);
        if (success) {
            alert("Desinscrito com sucesso.");
            window.location.reload();
        } else {
        alert("Erro ao sair do evento.");
        }
    };
</script>
  
  <style scoped>
  .participante-container {
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
    .esquerda,
    .direita {
    flex: 1;
    max-width: 50%;
    overflow: auto;
    box-sizing: border-box;
    text-align: center;
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
    padding: 20px;
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