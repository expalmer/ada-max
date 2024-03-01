# Ada Max

Criando a aplicação usando o Vite.

```bash
npm create vite@latest ada-max -- --template react-ts
```

Colocando React Router

```bash
npm i react-router-dom
```

## 1. Iniciando a aplicação

```bash
npm run dev
```

## 1. Criando o Form

28/02/2024

- state para email;
- isSubmitted;
- mostrar erro de email inválido;
- state para senha;
- mostrar erro de senha inválida;
- mostrar senha em texto;
- submit do form;
- loading no submit;
- adicionar o fakeApi
- mostrar erro (Alert) de credenciais inválidas
- mostrar console.log() de sucesso

01/03/2024

- Comunicar com a API;
- Salvar o token no LocalStorage;
- Redirecionar para HOME
- Criar um hook para pegar os dados do usuário; (`npm i jose` para decodificar o token)
- Criar um hooke para proteger a HOME;
- Fazer Logout;
- Criar um rota protegida para proteger a HOME e as demais páginas;

Atividade em Grupo

- Login com adamax -> id para BACKSTAGE
- Login com user -> ir para PROFILE

- [plus]: usar @rehooks/local-storage
