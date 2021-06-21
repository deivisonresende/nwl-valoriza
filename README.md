# nwl-valoriza

Projeto realizado com TypeScript

Primeiros passos:

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
