<template>
    <div class="criar-evento-container">
      <h1>Criar Evento</h1>
      <form @submit.prevent="handleSubmit">
        <Input v-model="form.nome" placeholder="Nome" />
        <Input v-model="form.descricao" placeholder="Descrição" />
        <Input v-model="form.data" type="date" placeholder="Data" />
        <Input v-model="form.horario" type="time" placeholder="Horário" />
        <select v-model="form.idLocal" class="dropdown">
          <option v-for="local in locais" :key="local.id" :value="local.id">
            {{ local.nome }}
          </option>
        </select>
  
        <div class="botao">
          <Button type="submit">Criar Evento</Button>
          <Button @click="goBack">Voltar</Button>
        </div>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import { EventoController } from "@/controllers/EventoController";
  import { LocalController } from "@/controllers/LocalController";
  import Input from "@/components/common/Input.vue";
  import Button from "@/components/common/Button.vue";
  
  const router = useRouter();
  const route = useRoute();
  
  // Formulário de edição
  const form = ref({
    nome: "",
    descricao: "",
    data: "",
    horario: "",
    idLocal: ""
  });
  
  // Lista de locais para o dropdown
  const locais = ref([]);
  
  // Mensagem de erro
  const errorMessage = ref("");
  
  // Função para carregar a lista de locais
  const loadLocais = async () => {
    try {
      const locaisResponse = await LocalController.getLocais();
      locais.value = locaisResponse;
    } catch (error) {
      errorMessage.value = "Erro ao carregar os locais.";
      console.error(error); // Ajuda a depurar o erro
    }
  };
  
  // Função para enviar o formulário
  const handleSubmit = async () => {
  if (
    !form.value.nome || 
    !form.value.descricao || 
    !form.value.data || 
    !form.value.horario || 
    !form.value.idLocal
    ) {
        errorMessage.value = "Preencha todos os campos obrigatórios!";
        return;
    }

  try {
    const organizadorIdSessao = JSON.parse(localStorage.getItem("user")).id;
    const updateData = {
      ...form.value,
      idOrganizador: organizadorIdSessao,
    };

    // Chamar o método de atualização
    await EventoController.register(updateData);

    alert("Evento atualizado com sucesso!");
    router.push("/organizador"); // Redireciona para a página do organizador
  } catch (error) {
    errorMessage.value = "Erro ao atualizar o evento.";
  }
};

  // Carrega os dados do evento e a lista de locais ao montar o componente
  onMounted(() => {
    loadLocais();
  });

  // Volta para o organizador
  const goBack = () => {
    router.push("/organizador");
  };
  </script>
  
  <style scoped>
  .criar-evento-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .error {
    color: red;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .dropdown {
    padding: 10px;
    font-size: 16px;
  }
  
  .link {
    cursor: pointer; 
  }

  .botao {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
  </style>
  