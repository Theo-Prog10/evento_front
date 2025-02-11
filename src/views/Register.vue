<template>
    <div class="register-container">
      <h1>Registrar</h1>
      <form @submit.prevent="handleRegister">
        <Input v-model="form.nome" placeholder="Nome" />
        <Input v-model="form.nascimento" type="date" placeholder="Data de Nascimento" />
        <Input v-model="form.cpf" placeholder="CPF" />
        <Input v-model="form.biografia" placeholder="Biografia" />
        <Input v-model="form.especialidade" placeholder="Especialidade" />
        <Input v-model="form.contato" placeholder="Contato" />
        <Input v-model="form.login" placeholder="Login" />
        <Input v-model="form.senha" type="password" placeholder="Senha" />
        <Button type="submit">Registrar</Button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p><span class="link" @click="goToLogin">Já tem uma conta? Faça login</span></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { PessoaController } from "@/controllers/PessoaController";
  import Input from "@/components/common/Input.vue";
  import Button from "@/components/common/Button.vue";
  
  const router = useRouter();
  const form = ref({
    nome: "",
    nascimento: "",
    cpf: "",
    biografia: "",
    especialidade: "",
    contato: "",
    login: "",
    senha: "",
  });
  const errorMessage = ref("");
  
  const handleRegister = async () => {
    if (
      !form.value.nome ||
      !form.value.nascimento ||
      !form.value.cpf ||
      !form.value.login ||
      !form.value.senha
    ) {
      errorMessage.value = "Preencha todos os campos obrigatórios!";
      return;
    }
  
    try {
      const pessoa = await PessoaController.register(form.value);
      if (pessoa) {
        localStorage.setItem("user", JSON.stringify(pessoa));
        router.push("/dashboard");
      }
    } catch (error) {
      errorMessage.value = "Erro ao registrar!";
    }
  };
  
  const goToLogin = () => {
    router.push("/login");
  };
  </script>
  
  <style scoped>
  .register-container {
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
  .link {
  cursor: pointer;
  }
  </style>