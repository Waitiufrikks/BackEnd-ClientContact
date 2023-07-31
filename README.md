# BackEnd-ClientContact

Guia para Iniciar a API e Executar Localmente

## Configuração e Execução

1. Navegue até a pasta onde deseja clonar o repositório da API.

2. Abra um terminal em seu computador.

3. Clone o repositório da API via SSH usando o comando:

   ```
   git clone git@github.com:Waitiufrikks/BackEnd-ClientContact.git
   Acesse o diretório da API clonada:
   ```

cd BackEnd-ClientContact
Agora, instale as dependências necessárias utilizando o comando:

npm install
Com as dependências instaladas, você pode executar as migrations com o comando:

npm typeorm migration:run -- -d src/data-source
Agora com as migrations executadas, você pode iniciar a API localmente com o comando:

npm run dev
Agora, sua API estará rodando em seu computador localmente e você pode acessá-la em http://localhost:3000 (ou em outra porta, se configurada diferente).

Lembre-se de verificar se há algum arquivo .env contendo variáveis de ambiente necessárias para o funcionamento correto da aplicação. Caso exista, certifique-se de fornecer os valores corretos para as variáveis definidas no arquivo .env.

Exemplo de arquivo .env:

DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
SECRET_KEY=sua_chave_secreta_aqui
Com isso, você deve estar com a API funcionando localmente em seu PC.

Rotas de Clientes
A seguir estão detalhadas as operações disponíveis para manipulação dos clientes na API Client-contacts:

Cadastrar um novo cliente
URL: POST /clients
Descrição: Cria um novo cliente com as informações fornecidas no corpo da requisição.
Corpo da requisição:

{
"full_name": "example",
"email": "example@mail.com",
"password": "1234"
}
Resposta da requisição POST do cliente:
Após o cadastro bem-sucedido do novo cliente, a API retornará uma resposta contendo os dados do cliente recém-criado. Por exemplo:

{
"id": 1,
"full_name": "example",
"email": "example@mail.com",
"phone": null,
"created_at": "2023-07-29"
}
O campo id é o ID atribuído ao novo cliente, e created_at indica a data e hora em que o cliente foi criado. O campo phone pode ser nulo, caso não seja fornecido no corpo da requisição.

Fazer Login com o Client
URL: POST /login
Descrição: Cria um novo cliente com as informações fornecidas no corpo da requisição.
Corpo da requisição:

{
"email": "example@mail.com",
"password": "1234"
}

Resposta da requisição POST do cliente:
Após o login bem-sucedido do novo cliente, a API retornará uma resposta contendo o token de acesso do client:

{
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY5MDc4NjI3NywiZXhwIjoxNjkwODcyNjc3LCJzdWIiOiIxMCJ9.m7j9Tt3wEkTwVfN5tcpiB0bCVv1I2RL5WEvCrI9PY2I"
}

Todos os campos obrigatorios!

Buscar o client que logou
URL: GET /clients/profile
Autenticação: Requer autenticação do usuário através de um token válido.
Descrição: Descrição: Busca o usuario que acabou de fazer o login para salva o acesso dele no site;

Resposta da requisição GET do cliente:
Após a busca bem-sucedida do cliente, a API retornará uma resposta contendo os dados basicos do client:
{
"id": 1,
"full_name": "example",
"email": "example@mail.com",
"phone": 123456789,
"created_at": "2023-07-29"
}

Atualizar informações de um cliente específico
URL: PATCH /clients/:id
Parâmetros: :id é o ID do cliente que deseja atualizar.
Descrição: Atualiza as informações do cliente com base no seu ID.
Autenticação: Requer autenticação do usuário através de um token válido.
Corpo da requisição PATCH do cliente:

{
"full_name": "exampleUpdate",
"phone": 123456789,
"password": "123456"
}
Resposta da requisição PATCH do cliente:
Após a atualização bem-sucedida das informações do cliente, a API retornará uma resposta contendo os dados do cliente atualizado. Por exemplo:

{
"id": 1,
"full_name": "exampleUpdate",
"email": "example@mail.com",
"phone": 123456789,
"created_at": "2023-07-29"
}
Listar todos os clientes
URL: GET /clients
Descrição: Retorna a lista de todos os clientes cadastrados no sistema.
Autenticação: Não requer autenticação.
Resposta da requisição GET dos clientes:
Após a requisição bem-sucedida dos clientes, a API retornará uma resposta contendo a lista de clientes. Cada cliente é representado por um objeto contendo os seguintes campos:

[
{
"id": 1,
"full_name": "example1",
"email": "example1@mail.com",
"phone": 123456789,
"contacts": [],
"created_at": "2023-07-31"
},
{
"id": 2,
"full_name": "example2",
"email": "example2@mail.com",
"phone": 123456789,
"contacts": [],
"created_at": "2023-07-31"
},
{
"id": 3,
"full_name": "example3",
"email": "example3@mail.com",
"phone": 123456789,
"contacts": [
{
"id": 1,
"full_name": "exampleContact",
"email": "exampleContact@mail.com",
"phone": 987654321,
"created_at": "2023-07-31"
}
],
"created_at": "2023-07-31"
}
]
Obter informações de um cliente específico
URL: GET /clients/:id
Parâmetros: :id é o ID do cliente desejado.
Descrição: Retorna as informações do cliente com base no seu ID.
Autenticação: Não requer autenticação.
Resposta da requisição GET do cliente pelo ID:
Após a requisição bem-sucedida da busca pelo cliente pelo ID, a API retornará uma resposta contendo os dados do cliente encontrado. Por exemplo:

{
"id": 3,
"full_name": "example3",
"email": "example3@mail.com",
"phone": 123456789,
"created_at": "2023-07-31"
}
Excluir um cliente específico
URL: DELETE /clients/:id
Parâmetros: :id é o ID do cliente que deseja excluir.
Descrição: Deleta o cliente com base no seu ID.
Autenticação: Requer autenticação do usuário através de um token válido.
Resposta da requisição DELETE do cliente:
Após a exclusão bem-sucedida do cliente, a API retornará uma resposta 204 No Content.

Rotas de Contatos
As rotas de contatos seguem o mesmo padrão das rotas de clientes, mas devem ser acessadas iniciando com /contacts. Abaixo estão detalhadas as operações disponíveis para manipulação dos contatos:

Listar todos os contatos
URL: GET /contacts
Descrição: Retorna a lista de todos os contatos cadastrados no sistema.
Autenticação: Não requer autenticação.
Resposta da requisição GET dos contatos:
Após a requisição bem-sucedida dos contatos, a API retornará uma resposta contendo os dados. Por exemplo:

[
{
"id": 1,
"full_name": "example1",
"email": "example1@mail.com",
"phone": 123456789,
"created_at": "2023-07-31"
},
{
"id": 2,
"full_name": "example2",
"email": "example2@mail.com",
"phone": 123456789,
"created_at": "2023-07-31"
},
{
"id": 3,
"full_name": "example3",
"email": "example3@mail.com",
"phone": 123456789,
"created_at": "2023-07-31"
}
]
Obter informações de um contato específico
URL: GET /contacts/:id
Parâmetros: :id é o ID do contato desejado.
Descrição: Retorna as informações do contato com base no seu ID.
Autenticação: Não requer autenticação.
Resposta da requisição GET do contato pelo ID:
Após a requisição bem-sucedida da busca pelo contato pelo ID, a API retornará uma resposta contendo os dados do contato encontrado. Por exemplo:

{
"id": 3,
"full_name": "example3",
"email": "example3@mail.com",
"phone": 123456789,
"created_at": "2023-07-31"
}
Criar um novo contato
URL: POST /contacts
Descrição: Cria um novo contato com as informações fornecidas no corpo da requisição.
Autenticação: Requer autenticação do usuário.
Corpo da requisição POST do contato:
Para criar um novo contato, você deve fazer uma requisição POST para a rota /contacts com o seguinte corpo:

{
"full_name": "example",
"email": "example@mail.com"
}
Resposta da requisição POST do contato:
Após a criação bem-sucedida do novo contato, a API retornará uma resposta contendo os dados do contato recém-criado. Por exemplo:

{
"id": 1,
"full_name": "example",
"email": "example@mail.com",
"phone": null,
"created_at": "2023-07-29"
}
O campo id é o ID atribuído ao novo contato, e created_at indica a data e hora em que o contato foi criado. O campo phone pode ser nulo, caso não seja fornecido no corpo da requisição.

Atualizar informações de um contato específico
URL: PATCH /contacts/:id
Parâmetros: :id é o ID do contato que deseja atualizar.
Descrição: Atualiza as informações do contato com base no seu ID.
Autenticação: Requer autenticação do usuário e que o cliente seja proprietário do contato.
Corpo da requisição PATCH do contato:
Para atualizar as informações de um contato existente, você deve fazer uma requisição PATCH para a rota /contacts/:id, onde :id é o ID do contato que deseja atualizar. O corpo da requisição deve conter os campos que você deseja alterar. Os campos são opcionais, permitindo que você atualize apenas os dados que deseja modificar. Por exemplo:

{
"full_name": "Novo Nome",
"email": "novoemail@example.com"
}
Resposta da requisição PATCH do contato:
Após a atualização bem-sucedida das informações do contato, a API retornará uma resposta contendo os dados do contato atualizado. Por exemplo:

{
"id": 1,
"full_name": "Novo Nome",
"email": "novoemail@example.com",
"phone": 123456789,
"created_at": "2023-07-29"
}
Excluir um contato específico
URL: DELETE /contacts/:id
Parâmetros: :id é o ID do contato que deseja excluir.
Descrição: Deleta o contato com base no seu ID.
Autenticação: Requer autenticação do usuário e que o cliente seja proprietário do contato.
Resposta da requisição DELETE do contato:
Após a exclusão bem-sucedida do contato, a API retornará uma resposta 204 No Content.
