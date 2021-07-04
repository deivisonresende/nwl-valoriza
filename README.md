<h1 style="text-align: center"> Valoriza <small style="font-size: 12px">read.me em construção🚧 </small></h1>

Sistema back-end que estimula o reconhecimento entre companheiros de equipe através de elogios. Incrível, não ?! 😃<svg width="56" height="36" viewBox="15 -50 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 33.5956L0 14.0956H15V33.5956H3.5Z" fill="black"/>
<path d="M16.5 32.5956V15.0956C16.5 15.0956 21 15.0956 22.5 16.0956C24 17.0956 26 19.0956 26 19.0956H34.5C34.5 19.0956 36 19.0956 36 20.5956C36 22.0956 35.7947 22.3903 36 22.5956C36.5 23.0956 52 17.0956 53.5 16.5956C55 16.0956 56.0982 18.5443 55 21.0956C55 21.0956 35 35 33.5 35.5C32 36 16.5 32.5956 16.5 32.5956Z" fill="black"/>
<path d="M21 10.0956C21 10.0956 25.5 18.5 27 18.5C28.5 18.5 34 18 35.5 18.5C37 19 36 21.5956 36.5 21.5956C37 21.5956 39 21.0956 40.5 20.5956C42 20.0956 46.5 14.0956 46.5 14.0956L49.5 10.0956C49.6068 10.0504 51 7.09562 50 4.59562C49.5 2.59562 46.1836 0.443488 43 0.0956206C39.4367 -0.29374 36.2419 2.08104 35 4.09562C33.8287 1.07519 31.5 -0.40438 27.5 0.0956206C24.5346 0.865768 23.4518 1.20428 21 4.59562C20.024 6.7435 20.2515 7.94774 21 10.0956Z" fill="black"/>
</svg>

## Sumário - _a ser atualizado_

[Árvore de diretórios](#Árvore-de-diretórios:)

[Como construir esta aplicação ?](#Passo-a-passo-🚀👩‍💻:)

[Um pouco sobre termos utilizados](#Keywords)

## Ferramentas e Tecnologias utilizadas:

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![Node.Js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white) ![Express.Js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![sqlite3](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) ![Insomnia](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white)

## Passo a passo 🚀👩‍💻:

1. Iniciar um projeto **`yarn init -y`**

2. Adicionar o TypeScript nas dependências **`yarn add typescript -D`**

3. Inicializar o TypeScript **`yarn tsc --init`**

4. Configurar o **ts.config**, conforme abaixo:

```Json
"strict": false,

"strictPropertyInitialization": false,

"esModuleInterop": true,

"experimentalDecorators": true,

"emitDecoratorMetadata": true,

"skipLibCheck": true,

"forceConsistentCasingInFileNames": true
```

5. Adicionar o **Express** nas dependências com o comando: **`yarn add express`**

6. Adicionar a biblioteca de tipagens de express nas dependências de desenvolvimento. No caso, para utilização do express: **`yarn add @types/express -D`**

O código TypeScript precisa ser convertido para JavaScript para que o **Node** consiga interpreta-lo, para isso podemos seguir o passo 6 ou 8.

7. Converter de TypeScript para JavaScript **`yarn tsc`**.

Este comando irá converter o arquivo de TypeScript para JavaScript, e a partir deste novo arquivo .JS poderá ser interpretado pelo node com o comando do passo 7.

8. inicializar o arquivo com "node caminhoDoArquivo", exemplo:
   **`node src/server.js`**

9. Para automatizar o processo anterior, pode ser instalada a biblioteca 'ts-node-dev' através do comando: **`yarn add ts-node-dev`**

10. No arquivo package.json, adicione um script denominado **"start": "ts-node-dev caminhoDoArquivo"**. No meu caso o script fica da seguinte forma: **`start": "ts-node-dev src/server.ts`**

11. No terminal, execute **`yarn start`** . Daí o servidor será iniciado e será reiniciado automaticamente após uma alteração nos arquivos .ts

12. Instalar o ORM desejado e as dependências necessária para conexão/manipulação do banco de dados. Para este projeto, foi o utilizado o [typeorm](https://typeorm.io). Comandos para instalação:

- ` yarn add typeorm` - ORM
- ` yarn add reflect-metadata` - Biblioteca para utilização de decorators.
- `yarn add sqlite3` - Driver do banco de dados

Também pode ser instalado em um único comando, da seguinte forma:` yarn add typeorm reflect-metadata sqlite3`

13. Criar na raiz do projeto, um arquivo de configuração do banco de dados, denominado **"ormconfig.json"**, com objeto abaixo:

```Json
{
"type": "sqlite",
"database":"src/database/database.sqlite",
"migrations":["src/database/migrations/*.ts"],
"entities":["src/entities/*.ts"],
"cli":{
"migrationsDir":"src/database/migrations",
"entitiesDir": "src/entities"
}
```

14. Criar a conexão com o banco de dados:

```typescript
import { createConnection } from 'typeorm';

const connection = createConnection();

connection
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.log('Não foi possível conectar à base de dados:', err);
  });
```

**//Fim do Passo a passo **

### Utilidades do sistema:

- Cadastro de usuário:

  -[x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail;

  -[x] Não é permitido cadastrar um usuário sem e-mail;

- Cadastro de Hashtag:

  -[x] Não é permitido cadastrar mais de uma TAG com o mesmo nome;

  -[x] Não é permitido cadastrar uma TAG sem nome;

  -[x] Somente usuários cadastrados como administradores podem cadastrar TAGS

- Cadastro de elogios:

  -[x] Não é permitido um usuário cadastrar um elogio para si;

  -[x] Não é permitido cadastrar elogios para usuários inválidos;

  -[x] Para cadastrar um elogio, o usuário precisa estar cadastrado na aplicação;

- Listagem de usuários
- Listagem de Hashtags
- Listagem de elogios por usuário

### Keywords:

#### Migrations:

Criação e versionamento de tabelas

#### Entities:

Modelo de uma tabela do banco de dados

Veja uma explicação completa em: [typeorm.io/#/entities](https://typeorm.io/#/entities)

#### Repositories:

Classe responsável por se comunicar com o banco. Intermedia a conexão com o banco de dados e executa as querys, através da extensão da classe Repository do typeorm.

Veja uma explicação completa em: [typeorm.io/#/custom-repository](https://typeorm.io/#/custom-repository)

#### Controller:

Responsável por receber os dados da requisição e enviar para o service.

#### Service:

Responsável por executar todas as operações e verificações para a requisição.

#### Middleware:

Interceptador de requisições e realiza os tratamentos necessários, como por exemplo: Autenticação de usuário.

Veja uma explicação completa em: [expressjs.com/pt-br/guide/using-middleware.html](https://expressjs.com/pt-br/guide/using-middleware.html)

#### Métodos HTTP utilizados :

- **GET** :

Requisição de dados.

- **POST** :

Inserção de dados.

### Árvore de diretórios:

```
    src

    ├── /@types
    └── /controllers
    └── /database
    |    └── /migrations
    └── /entities
    └── / middlewares
    └── /repositories
    └── /services
    └── routes
    └── server
```

### 📄Licença

Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Realizado com a [RocketSeat](https://rocketseat.com.br/) !
