# LockIt! – Frontend (Angular)

Este é o frontend da aplicação LockIt!, um sistema de autenticação com login protegido via **JWT (JSON Web Token)**.

Foi desenvolvido com Angular e utiliza `SessionStorage` para armazenar o token de autenticação e controlar o acesso à tela protegida.

🔐 Backend disponível em: [lockit-backend](https://github.com/MarceloCabral98sp/jwt-auth-backend)

---

## 🛠️ Tecnologias

- Angular
- TypeScript
- SessionStorage (para manter o token JWT)
- Angular Router

---

## ✨ Funcionalidades

- Cadastro de novos usuários
- Login com autenticação JWT
- Página de boas-vindas ao usuário logado
- Logout que remove o token da sessão

---

## 🚀 Como executar o frontend

```bash
# Instale as dependências
npm install

# Rode a aplicação
ng serve
