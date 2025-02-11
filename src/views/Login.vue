<template>
  <div class="login-container">
    <h1>Login</h1>
    <Input v-model="login" placeholder="Digite seu login" />
    <Input v-model="senha" type="password" placeholder="Digite sua senha" />
    <Button @click="handleLogin">Entrar</Button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p><span class="link" @click="goToRegister">Não tem uma conta? Registre-se</span></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { AuthController } from "@/controllers/AuthController";
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

const router = useRouter();
const login = ref("");
const senha = ref("");
const errorMessage = ref("");

const handleLogin = async () => {
  if (!login.value || !senha.value) {
    errorMessage.value = "Preencha todos os campos!";
    return;
  }

  const pessoa = await AuthController.login(login.value, senha.value);

  if (pessoa) {
    localStorage.setItem("user", JSON.stringify(pessoa));
    router.push("/dashboard");
  } else {
    errorMessage.value = "Login ou senha inválidos!";
  }
};

const goToRegister = () => {
  router.push("/register");
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.error {
  color: red;
}

.link {
  cursor: pointer;
}
</style>