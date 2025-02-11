<template>
    <div class="editar-evento-container">
      <h1>Editar Evento</h1>
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
  
        <Button type="submit">Salvar Alterações</Button>
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
  
  const form = ref({
    nome: "",
    descricao: "",
    data: "",
    horario: "",
    idLocal: ""
  });
  
  const locais = ref([]);
  
  const errorMessage = ref("");
  
  const loadEvento = async () => {
    const eventoId = route.params.id;
    if (!eventoId) {
      errorMessage.value = "ID do evento não encontrado!";
      return;
    }
  
    try {
      const evento = await EventoController.getEvento(eventoId);
      if (evento) {
        form.value = {
          nome: evento.nome,
          descricao: evento.descricao,
          data: evento.data, 
          horario: evento.horario,
          idLocal: evento.idLocal
        };
      } else {
        errorMessage.value = "Evento não encontrado!";
      }
    } catch (error) {
      errorMessage.value = "Erro ao carregar os dados do evento.";
      console.error(error);
    }
  };
  
  const loadLocais = async () => {
    try {
      const locaisResponse = await LocalController.getLocais();
      locais.value = locaisResponse;
    } catch (error) {
      errorMessage.value = "Erro ao carregar os locais.";
      console.error(error);
    }
  };
  
  const handleSubmit = async () => {
  if (!form.value.nome || !form.value.descricao || !form.value.data || !form.value.horario || !form.value.idLocal) {
    errorMessage.value = "Preencha todos os campos obrigatórios!";
    return;
  }

  try {
    const organizadorIdSessao = JSON.parse(localStorage.getItem("user")).id;

    const eventoId = route.params.id;
    const updateData = {
      ...form.value,
      idOrganizador: organizadorIdSessao,
    };

    console.log("Dados enviados para o backend:", updateData)
    await EventoController.updateEvento(eventoId, updateData);

    alert("Evento atualizado com sucesso!");
    router.push("/organizador");
  } catch (error) {
    errorMessage.value = "Erro ao atualizar o evento.";
    console.error(error);
  }
};

  onMounted(() => {
    loadEvento();
    loadLocais();
  });
  </script>
  
  <style scoped>
  .editar-evento-container {
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
  </style>
  