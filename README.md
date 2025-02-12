🎨 Frontend - Gerenciador de Eventos
------------------------
Este repositório contém o código-fonte do frontend do sistema Gerenciador de Eventos, desenvolvido em Vue.js seguindo o padrão MVC.
------------------------
📋 Índice<br>
🛠 Tecnologias Utilizadas<br>
📁 Estrutura do Projeto<br>
🚀 Executando o Projeto<br>
🔄 Comunicação com a API<br>
🖼 Telas do Sistema<br>
-------------------------

#### 🛠 Tecnologias Utilizadas
- Vue.js 3 (Framework para construção da interface)
- Vue Router (Gerenciamento de rotas)
- Axios (Requisições HTTP para a API)
- TypeScript

#### 📁 Estrutura do Projeto
```
evento_front
│
│   App.vue
│   main.ts
│
├───controllers
│       AuthController.ts
│       EventoController.ts
│       InscricaoController.ts
│       LocalController.ts
│       PessoaController.ts
│
├───models
│       EventoDTORequest.ts
│       EventoDTOResponse.ts
│       LocalDTORequest.ts
│       LocalDTOResponse.ts
│       LoginRequest.ts
│       PessoaDTORequest.ts
│       PessoaDTOResponse.ts
│
├───repositories
│       AuthRepository.ts
│       EventoRepository.ts
│       InscricaoRepository.ts
│       LocalRepository.ts
│       PessoaRepository.ts
│
├───router
│       index.ts
│
├───services
│       api.ts
│       AuthService.ts
│       EventoService.ts
│       InscricaoService.ts
│       LocalService.ts
│       PessoaService.ts
│
└───views
        CriarEvento.vue
        CriarLocal.vue
        Dashboard.vue
        DetalhesEvento.vue
        EditarEvento.vue
        EditarPerfil.vue
        Login.vue
        Organizador.vue
        Palestrante.vue
        Participante.vue
        Register.vue
```     

-------------------------
### 🚀 Executando o Projeto
```
npm install
npm run serve
```

### 🔄 Comunicação com a API
```
  baseURL: "http://localhost:8080",

  import axios from "axios";

  export const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json",
    },
  });
```
### 🖼 Principais telas do Sistema<br>
Tela de Login:
![image](https://github.com/user-attachments/assets/8ff6c9f2-99fc-4d1d-91ae-3f0d9db5f81a)

Tela com dashboard:
![image](https://github.com/user-attachments/assets/3b80fd67-e6b8-4692-a600-b887b3b2193e)

Tela do Organizador:
![image](https://github.com/user-attachments/assets/ef83311d-5a91-4ef6-b354-506848d135a7)

Tela do Palestrante:
![image](https://github.com/user-attachments/assets/ab4aad59-2c25-4df3-bd1d-4a5a825687d8)

Tela do Participante:
![image](https://github.com/user-attachments/assets/8520d174-2c73-4b0e-9963-0488f0058a94)



