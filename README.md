

# 🗃️ API de Gerenciamento de Usuários

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![UUID](https://img.shields.io/badge/UUID-0078D4?style=flat-square&logo=uuid&logoColor=white)

## 📋 Descrição

Este projeto é uma **API de gerenciamento de usuários** simples desenvolvida com **Node.js** e **Express**. A API permite criar, ler, atualizar e excluir informações de usuários utilizando um sistema de IDs únicos gerados pelo **UUID**.

## 🛠️ Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) **Node.js**: Ambiente de execução para JavaScript no servidor.
- ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) **Express.js**: Framework para criação de APIs RESTful.
- ![UUID](https://img.shields.io/badge/UUID-0078D4?style=flat-square&logo=uuid&logoColor=white) **UUID**: Biblioteca para geração de IDs únicos.

## 🚀 Funcionalidades

1. **Consultar Todos os Usuários**
   - **Método**: GET
   - **Rota**: `/users`
   - **Descrição**: Retorna todos os usuários cadastrados.

2. **Criar Novo Usuário**
   - **Método**: POST
   - **Rota**: `/users`
   - **Descrição**: Cria um novo usuário com os campos `name` e `age`.

3. **Atualizar Usuário pelo ID**
   - **Método**: PUT
   - **Rota**: `/users/:id`
   - **Descrição**: Atualiza um usuário existente pelo ID especificado.

4. **Deletar Usuário pelo ID**
   - **Método**: DELETE
   - **Rota**: `/users/:id`
   - **Descrição**: Deleta um usuário existente pelo ID especificado.

## 📜 Exemplos de Requisições

- **Criar Usuário**:
  ```http
  POST /users
  Content-Type: application/json

  {
    "name": "Henrique",
    "age": 34
  }
  ```

- **Atualizar Usuário**:
  ```http
  PUT /users/:id
  Content-Type: application/json

  {
    "name": "Henrique",
    "age": 35
  }
  ```

- **Deletar Usuário**:
  ```http
  DELETE /users/:id
  ```

- **Consultar Usuários**:
  ```http
  GET /users
  ```

## 💻 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-gerenciamento-usuarios.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd api-gerenciamento-usuarios
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```

## 📈 Demonstração

Veja a aplicação em ação [aqui](#).

## ✨ Agradecimentos

Agradeço a todos que contribuíram para o desenvolvimento deste projeto e à comunidade de desenvolvimento de software por seu apoio contínuo.
