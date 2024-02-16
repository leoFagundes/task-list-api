Essa é uma API de task list, onde temos um usuário e cada usuário tem suas próprias tarefas.

Link da API: `https://task-list-api-vrnr.onrender.com/`

# Rotas e Modelo de Usuário:

- **(GET) /users**
  - Descrição: Obtém todos os usuários cadastrados.

- **(GET) /users/:id**
  - Descrição: Obtém um usuário específico pelo ID.

- **(POST) /users**
  - Descrição: Cria um novo usuário.

- **(POST) /users/login**
  - Descrição: Realiza o login de um usuário.
  - Precisa do username e da senha

- **(PUT) /users/:id**
  - Descrição: Atualiza as informações de um usuário existente pelo ID.

- **(DELETE) /users/:id**
  - Descrição: Exclui um usuário existente pelo ID.

### Model

- `id`: Identificador único do usuário (gerado automaticamente).
- `username`: Nome de usuário (*String*, obrigatório).
- `password`: Senha do usuário (*String*, obrigatório).
- `profileImage`: URL da imagem de perfil do usuário (*String*, padrão vazio).
- `lists`: Lista de listas pertencentes ao usuário, onde cada elemento é um objeto contendo uma lista (*Array* de objetos, cada objeto seguindo o esquema de `List`).

# Rotas e Modelo de Listas:

- **(GET) /lists**
  - Descrição: Obtém todas as listas de tarefas do usuário logado.

- **(GET) /lists/:id**
  - Descrição: Obtém uma lista de tarefas específica pelo ID.

- **(POST) /lists**
  - Descrição: Cria uma nova lista de tarefas para o usuário logado.

- **(PUT) /lists/:id**
  - Descrição: Atualiza uma lista de tarefas existente pelo ID.

- **(DELETE) /lists/:id**
  - Descrição: Exclui uma lista de tarefas existente pelo ID.

### Model

- `id`: Identificador único da lista (gerado automaticamente).
- `author`: Autor da lista (*String*, obrigatório).
- `title`: Título da lista (*String*, padrão vazio).
- `message`: Mensagem relacionada à lista (*String*, padrão vazio).
- `isFavorite`: Indica se a lista é favorita ou não (*Boolean*, padrão falso).
- `status`: Status da lista (*String*).

