# nwl-valoriza

Projeto realizado com TypeScript

## Inicialização e configurações:

1- yarn init -y ou npm init -y

2- yarn add ou npm install typescript -D

3- yarn tsc --init

4- Atribuir 'false' no "strict" do arquivo ts.config.

5- Baixar as bibliotecas de tipagens necessárias. No caso, para utilização do express: 'yarn add @types/express -D'

O código TypeScript precisa ser convertido para JavaScript para que o Node consiga interpreta-lo, para isso podemos seguir o passo 5 ou 8.

6- yarn tsc
Este comando irá converter o arquivo de TypeScript para JavaScript, e a partir deste novo arquivo .JS poderá ser interpretado pelo node com o comando do passo 7.

7 - inicializar o arquivo com "node caminhoDoArquivo", exemplo:
node src/server.js

8- Para automatizar o processo anterior, pode ser instalada a biblioteca 'ts-node-dev' através do comando: 'yarn add ts-node-dev'

9- No arquivo package.json, adicione um script denominado "start": "ts-node-dev caminhoDoArquivo". No meu caso o script fica da seguinte forma: "start": "ts-node-dev src/server.ts"

10- No terminal, execute yarn start ou npm start. Daí o servidor será iniciado e será reiniciado automaticamente após uma alteração nos arquivos .ts

**\* Organizar informações:**

## Inicializar tsconfig.son e habilitar(descomentar) as opções abaixo:

"strict": false,

"strictPropertyInitialization": false,

"esModuleInterop": true,

"experimentalDecorators": true,

"emitDecoratorMetadata": true,

"skipLibCheck": true,

"forceConsistentCasingInFileNames": true

## Criar arquivo "ormconfig.son" abaixo:

{
"type": "sqlite",
"database":"src/database/database.sqlite",
"migrations":["src/database/migrations/*.ts"],
"entities":["src/entities/*.ts"],
"cli":{
"migrationsDir":"src/database/migrations",
"entitiesDir": "src/entities"
}
}

## Regras

- Cadastro de usuário:

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail;

  [ x ] Não é permitido cadastrar um usuário sem e-mail;

- Cadastro de TAG:

  [ ] Não é permitido cadastrar mais de uma TAG com o mesmo nome;

  [ ] Não é permitido cadastrar uma TAG sem nome;

  [ ] Somente usuários cadastrados como administradores podem cadastrar TAGS

- Cadastro de elogios:

  [ ] Não é permitido um usuário cadastrar um elogio para si;

  [ ] Não é permitido cadastrar elogios para usuários inválidos;

  [ ] Para cadastrar um elogio, o usuário precisa estar cadastrado na aplicação;

## Fluxo API

- server => routes(request) => controller => service => server => routes(response)

### Migrations:

- Criação e versionamento de tabelas

### Entities:

- Modelo de uma tabela do banco de dados

### Repositorys:

- Classe responsável por se comunicar com o banco. Intermedia a conexão com o banco de dados e executa as querys.

### Service:

- Executar todas as operações e verificações necessárias para a requisição

### Controller:

- Responsável por pegar os dados da requisição e enviar para o service.

### Middleware:

- função que intercepta requisições
