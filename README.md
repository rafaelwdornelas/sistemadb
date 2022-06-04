<img src="Screenshot.png" alt="exemplo imagem">

# sistemadb

## 🔧 Funções:

### Banco de Dados:

- Criação automática do banco de dados atravez da biblioteca sequelize, trazendo para o projeto a possibilidade de utilização em diversos bancos de dados por padrão.
- Controle de novas versões do banco automatizado atravez do migrations dentro do sequelize.
- Criação de seed para alimentar tabelas com valores padrões de funcionamento

### API:

- Criação de uma API utilizando a biblioteca express, com controle de acesso por token JWT.
- Documentação da API utilizando o componente Swagger.

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Clientes
- [x] Clientes Fámilia
- [x] Telefones
- [x] Endereços
- [x] Países
- [x] Municipios
- [x] CNAE
- [x] Unidades
- [x] Formas de Pagamento
- [ ] Lojas
- [ ] Produtos
- [ ] Produtos Fámilia
- [ ] Tabela de Preços
- [ ] ...

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `<Node.js,NPM,YARN>`
- Você instalou um desses servidores de dados `<SQL Server,Postgres,mysql2,mariadb,sqlite3>`
- Você criou um banco de dados novo dentro do servidor de dados escolhico
- Voce baixou esse projeto atraves do comando git clone

```
git clone https://github.com/rafaelwdornelas/sistemadb.git
```

- Fez a instalação da biblioteca do banco de dados que escolheu dentro do pojeto da seguinte mandeira:

```
$ yarn add pg pg-hstore # Postgres
$ yarn add  mysql2
$ yarn add  mariadb
$ yarn add  sqlite3
$ yarn add  tedious # Microsoft SQL Server
```

- Fez a instalação das bibliotecas do projeto:

```
yarn install
```

- Configurou a conexão do bando de dados dentro do arquivo ./api/config/config.json

## 💻 Funções Iniciais do Bando de Dados:

- Criar todas as tabelas do Banco de dados:

```
yarn sequelize db:migrate --debug
```

- Enviando todos os registros padrões para dentro das tabelas já criadas:

```
yarn sequelize db:seed:all --debug
```

## 💻 Iniciando a API:

```
yarn start
```

## 💻 Acessar a Documentação local da API:

http://localhost:37778/api-docs/

[![Documentação](https://img.shields.io/badge/Manual-999999?style=for-the-badge&logo=BookStack&logoColor=white)](http://localhost:37778/api-docs/)
