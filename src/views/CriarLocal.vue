<template>
    <div class="criar-local-container">
      <h1>Criar Local</h1>
      <form @submit.prevent="submitForm">
        <Input v-model="form.nome" placeholder="Nome" />
        <Input v-model="form.logradouro" placeholder="Logradouro" />
        <Input v-model="form.numero" type="number" placeholder="Numero" />
        <Input v-model="form.uf" placeholder="UF" />
        <Input v-model="form.cidade" placeholder="Cidade" />
        <Input v-model="form.bairro" placeholder="Bairro" />
        <Button type="submit">Criar local</Button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <Button @click="goBack">Voltar</Button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { LocalController } from "@/controllers/LocalController";
  import Input from "@/components/common/Input.vue";
  import Button from "@/components/common/Button.vue";
  
  const router = useRouter();
  const form = ref({
    nome: "",
    logradouro: "",
    numero: "",
    uf: "",
    cidade: "",
    bairro: ""
  });
  const errorMessage = ref("");
  
 
  
  // Envia o formulário de edição
  const submitForm = async () => {
    if (
      !form.value.nome ||
      !form.value.logradouro ||
      !form.value.numero ||
      !form.value.uf ||
      !form.value.cidade ||
      !form.value.bairro
    ) {
      errorMessage.value = "Preencha todos os campos obrigatórios!";
      return;
    }

    try {
      await LocalController.register(form.value);
      alert("Local criado com sucesso!");
      router.push("/organizador");
    } catch (error) {
      errorMessage.value = `Erro ao criar local: ${error.message}`;
      console.error(error); // Adicione isso para ver detalhes do erro no console
    }
  };
  
  // Volta para o organizador
  const goBack = () => {
    router.push("/organizador");
  };
  </script>
  
  <style scoped>
  .criar-local-container {
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
  </style>