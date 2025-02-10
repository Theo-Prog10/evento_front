🎨 Frontend - Gerenciador de Eventos
------------------------
Este repositório contém o código-fonte do frontend do sistema Gerenciador de Eventos, desenvolvido em Vue.js seguindo o padrão MVC.
------------------------
📋 Índice
🛠 Tecnologias Utilizadas
📁 Estrutura do Projeto
⚙️ Configuração do Ambiente
🚀 Executando o Projeto
🔄 Comunicação com a API
🖼 Telas do Sistema
📌 Próximos Passos
-------------------------
📁 Estrutura do Projeto

frontend/
│── src/
│   ├── components/     
│   ├── views/         
│   ├── router/          
│   ├── store/          
│   ├── services/       
│   ├── assets/          
│   ├── main.js          
│   ├── App.vue          
│── public/              
│── package.json        
│── README.md           

-------------------------

npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
-------------------------

🔄 Comunicação com a API
  baseURL: "http://localhost:8080",

  import axios from "axios";

  export const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json",
    },
  });
## Project setup
```
