# Desafio Técnico 2 - Escribo

## 📂 Sobre o Projeto

<p align='justify'>
Este é um projeto desenvolvido como parte de um desafio técnico para a Escribo. A aplicação é uma API para gerenciar usuários e telefones, com funcionalidades como cadastro, autenticação e recuperação de informações do usuário logado.
</p>

## 🛠️ Bibliotecas e Tecnologias
### Tecnologias utilizadas:
<div>
	<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
		<img align='center' height='45' title='Javascript' alt='javascript' src='https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png'>
	</a>
	<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
		<img align='center' height='50' title='Node.js' alt='node.js' src='https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png'>
	</a>
	<a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
		<img align='center' height='50' title='Express' alt='express' src='https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png'>
	</a>
	<a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
		<img align='center' height='50' title='PostegreSQL' alt='postegres' src='https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png'>
	</a>
	<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
		<img align='center' height='45' title='Git' alt='git' src='https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png'>
	</a>
	<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
		<img align='center' height='55' title='NPM' alt='npm' src='https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png'>
	</a>
</div>

### Bibliotecas utilizadas:
<div>	
	<a href="https://nodemon.io/" target="_blank" rel="noopener noreferrer">
		<img align='center' height='48' width='44' title='Nodemon' alt='nodemon' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/fd586348-7781-4e02-a4f0-fe7410ef43fb'>
	</a>
	<a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
		<img align='center' height='60' width='60' title='JWT' alt='jwt' src="https://media.licdn.com/dms/image/D4D12AQHW9aRSWIOMxQ/article-cover_image-shrink_600_2000/0/1657421703592?e=2147483647&v=beta&t=nKygyfSDFwgPdEoC-nEkogMS0527SBa8z8D_FqUr-us">
	</a>
	<a href="http://knexjs.org/" target="_blank" rel="noopener noreferrer">
		<img align='center' height='50' title='Knex.js' alt='knex.js' src="https://static-00.iconduck.com/assets.00/knex-js-icon-512x512-a2yn0209.png">
	</a>
	<a href="https://www.npmjs.com/package/bcrypt" target="_blank" rel="noopener noreferrer">
		<img align='center' height='43' title='Bcrypt' alt='bcrypt' src="https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGU30LWO2YUXQtIYwJY_Ac_c=/bcryptnet-2023-01-04%2000-00-00-2023-06-23%2016-23-53">
	</a>
</div>

## 🕹️ Funcionalidades

A API conta com as funcionalidades listadas abaixo:

- [x] Cadastrar Usuário
- [X] Fazer Login
- [x] Detalhar Perfil do Usuário

## Deploy

A aplicação está disponível em: [https://desafiotecnico2escribo.onrender.com/](https://desafiotecnico2escribo.onrender.com/)

## Configuração

### Pré-requisitos
- [Node.js](https://nodejs.org/en/download/current) instalado
- [Git](https://git-scm.com/downloads istalado

### Instalação

1. **Clone o repositório:**

   ```bash
   	git clone git@github.com:Julio-Cezar-Santos/desafioTecnico2Escribo.git
   ```

2. **Abra seu terminal na pasta do repositório e execute o comando:**

    ```bash
    npm install
    ```

3. **Após a instalação ser efetuada, crie e configure seu arquivo **.env** com base no .env.example:**

    ```env
    # Porta para o Express
    PORT= Porta_Express (Ex.: 3000)

    # Dados de conexão com o Database
    DB_HOST= Host_Do_Databse
    DB_PORT= Porta_Do_Database
    DB_USER= User_Do_Database
    DB_PASS= Senha_Do_Database
    DB_NAME= Nome_Do_Database
    
    # Senha única para criação e autenticação de Tokens
    JWT_SECRET= Chave_Secreta_Para_Tokens 
    ```
4. **Com seu arquivo **.env** configurado, inicialize a API:**

    ```bash
    npm run dev
    ```
## 🛢️ Estruturação do Banco de Dados

Para finalizar, antes de utilizar das funcionalidades da API, é necessário que o banco de dados esteja estruturado para receber as informações e alterações corretamente. Para isso, conecte-se ao banco utilizando algum Database Manager (Ex.: Beekeeper Studio, etc.) e execute os códigos escrito no arquivo `schema.sql`, seguindo passo a passo.

<details>
<summary><b>Schema Code:</b></summary>
    
```sql
-- Passo 1: Remover tabelas caso existam
DROP TABLE IF EXISTS telefones;
DROP TABLE IF EXISTS usuarios;

-- Passo 2: Criar novas tabelas
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultimo_singIn TIMESTAMP
);

CREATE TABLE telefones (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
    numero VARCHAR(255) NOT NULL,
    ddd VARCHAR(10) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
</details>

## 📌 Endpoints

### Cadastrar Usuário:

- **POST /signUp**: Cria um novo usuário. Requer um corpo JSON com as informações do usuário.
  - Exemplo de requisição:
    ```json
    {
      "nome": "Nome do Usuário",
      "email": "usuario@email.com",
      "senha": "senha123",
      "telefones": [
        {
          "numero": "123456789",
          "ddd": "11"
        },
        {
          "numero": "987654321",
          "ddd": "22"
        }
      ]
    }
    ```
  - Exemplo de resposta:
    ```json
    {
      "id": 1,
      "data_criacao": "2023-01-01T00:00:00.000Z",
      "data_atualizacao": "2023-01-01T00:00:00.000Z",
      "ultimo_login": "2023-01-01T00:00:00.000Z",
      "token": "seu-token-de-autenticacao"
    }
    ```

- **POST /signIn**: Autentica um usuário. Requer um corpo JSON com e-mail e senha.
  - Exemplo de requisição:
    ```json
    {
      "email": "usuario@email.com",
      "senha": "senha123"
    }
    ```
  - Exemplo de resposta:
    ```json
    {
      "id": 1,
      "data_criacao": "2023-01-01T00:00:00.000Z",
      "data_atualizacao": "2023-01-01T00:00:00.000Z",
      "ultimo_login": "2023-01-01T12:34:56.789Z",
      "token": "seu-token-de-autenticacao"
    }
    ```
- **GET /getUser**: Retorna as informações do usuário autenticado.
  - Exemplo de resposta:
    ```json
    {
      "id": 1,
      "nome": "Nome do Usuário",
      "email": "usuario@email.com",
      "data_criacao": "2023-01-01T00:00:00.000Z",
      "data_atualizacao": "2023-01-01T00:00:00.000Z",
      "ultimo_login": "2023-01-01T12:34:56.789Z"
    }
    ```

### Observações
- As datas são representadas no formato ISO 8601.
- O token de autenticação gerado após o registro ou login deve ser incluído no cabeçalho da requisição como "Authorization: Bearer {seu-token}" para acessar rotas autenticadas.
