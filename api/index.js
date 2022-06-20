require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const helmet = require("helmet");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const { globais } = require("./modules");
const moduloglobais = new globais();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "CoreByte ERP  - DB",
    version: "1.0.0",
    description: "API documentation",
    contact: {
      name: "CoreByte ERP",
      url: "https://www.corebyteerp.com.br",
      email: "contato@corebyteerp.com.br",
    },
  },
  /*  servers: [
    {
      url: "http://127.0.0.1:37778",
      description: "Localhost",
    },
    {
      url: "http://207.244.230.240:37778",
      description: "CoreByte ERP",
    },
  ], */
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

fs.readFile("layout.css", "utf8", function (err, data) {
  if (err) throw err;
  var cssOptions = {
    customCss: data,
    customSiteTitle: "CoreByte ERP - API",
    explorer: false,
  };

  const options = {
    swaggerDefinition,
    apis: ["./api/*.js", "./api/routes/*.js", "./components.yaml"],
  };

  const swaggerDocs = swaggerJsDoc(options);

  app.get("/api-docs.json", (req, res) => {
    res.send(swaggerDocs);
  });

  if (process.env.SWAGGERUICSS == "1") {
    app.use(
      "/",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocs, cssOptions, { docExpansion: "none" })
    );
  } else {
    app.use(
      "/",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocs, false, { docExpansion: "none" })
    );
  }
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
routes(app);
moduloglobais.log("Iniciando API...", "");
app.listen(port, () =>
  moduloglobais.log(`Servidor iniciado na porta: ${port}`, "success")
);

module.exports = app;
