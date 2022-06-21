require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const swaggerJsDoc = require("swagger-jsdoc");
const helmet = require("helmet");
const path = require("path");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;
const { globais } = require("./modules");
const moduloglobais = new globais();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "CoreByte ERP  - DB",
    version: "1.0.0",
    description:
      "Documentação da API do CoreByte ERP - DB\n\n## Cabeçalhos\n#### Token de Autenticação\nCom `Secret Key` você consegue <a href='#post-/login'>realizar o login</a> em nossa api para obter o `Bearer` de autenticação. Ele é obrigatório em todas as rotas autenticadas.\n\nExemplo de um **header**:\n \nAuthorization: Bearer {BEARER_TOKEN}\n \nCódigos de Respostas\nNossa API usa como retorno os códigos HTTP padrão para indicar tanto o sucesso de uma requisição, quanto para indicar falha. Segue:\n\n| CODE  |                               |\n|-------|-------------------------------|\n| `200` | Função executada com sucesso  |\n| `400` | Solicitação inválida          |\n| `401` | Usuário não autenticado       |\n| `403` | Usuário sem permissão         |\n| `404` | Solicitação indisponível      |\n| `500` | Erro interno do servidor      |\n\n",
    contact: {
      name: "CoreByte ERP",
      url: "https://www.corebyteerp.com.br",
      email: "contato@corebyteerp.com.br",
    },
  },
  servers: [],
  termsOfService: "http://swagger.io/terms/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  basePath: "/",
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

app.get("/api-docs.json", (req, res) => {
  swaggerDefinition.servers = [
    {
      url: `http://${req.hostname}:37778`,
      description: "CoreByte ERP",
    },
  ];
  const options = {
    swaggerDefinition,
    apis: ["./api/*.js", "./api/routes/*.js", "./components.yaml"],
  };

  const swaggerDocs = swaggerJsDoc(options);

  res.send(swaggerDocs);
});

app.get("/", function (req, res) {
  let html = fs.readFileSync(
    path.join(__dirname + "/documentation.html"),
    "utf8"
  );
  html = html.replace("{{server}}", req.hostname);
  res.send(html);
});

const allowCrossDomain = async (req, res, next) => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Xss-Protection", true);
  res.header("Sql-Injection-Protection", true);
  res.header("Connection-From", ip);
  next();
};

app.use(allowCrossDomain);
app.use(helmet());
app.use(cors());
app.use(express.static("public"));
routes(app);
moduloglobais.log("Iniciando API...", "");
app.listen(port, () =>
  moduloglobais.log(`Servidor iniciado na porta: ${port}`, "success")
);

module.exports = app;
