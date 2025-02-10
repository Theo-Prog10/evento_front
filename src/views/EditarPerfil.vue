<template>
    <div class="editar-perfil-container">
      <h1>Editar Perfil</h1>
      <form @submit.prevent="submitForm">
        <Input v-model="form.nome" placeholder="Nome" />
        <Input v-model="form.nascimento" type="date" placeholder="Data de Nascimento" />
        <Input v-model="form.cpf" placeholder="CPF" />
        <Input v-model="form.biografia" placeholder="Biografia" />
        <Input v-model="form.especialidade" placeholder="Especialidade" />
        <Input v-model="form.contato" placeholder="Contato" />
        <div class="botao">
          <Button type="submit">Salvar Alterações</Button>
          <Button @click="goBack">Voltar</Button>
        </div>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { PessoaController } from "@/controllers/PessoaController";
  import Input from "@/components/common/Input.vue";
  import Button from "@/components/common/Button.vue";
  
  const router = useRouter();
  const form = ref({
    id: null,
    nome: "",
    nascimento: "",
    cpf: "",
    biografia: "",
    especialidade: "",
    contato: "",
  });
  const errorMessage = ref("");
  
  // Busca os dados do perfil ao carregar a tela
  onMounted(async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      try {
        const profile = await PessoaController.getProfile(user.id);
        form.value = { ...profile, id: user.id };
      } catch (error) {
        errorMessage.value = "Erro ao carregar perfil!";
      }
    }
  });
  
  // Envia o formulário de edição
  const submitForm = async () => {
    try {
      await PessoaController.updateProfile(form.value.id, form.value);
      alert("Perfil atualizado com sucesso!");
      router.push("/dashboard");
    } catch (error) {
      errorMessage.value = "Erro ao atualizar perfil!";
    }
  };
  
  // Volta para o dashboard
  const goBack = () => {
    router.push("/dashboard");
  };
  </script>
  
  <style scoped>
  .editar-perfil-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .error {
    color: red;
  }

  .botao {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
  </style>