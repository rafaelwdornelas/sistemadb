const express = require("express");
const routes = require("./routes");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const port = 37778;
const fs = require("fs");

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
    security: [{
        bearerAuth: [],
    }, ],
};

fs.readFile("layout.css", "utf8", function(err, data) {
    if (err) throw err;
    var cssOptions = {
        customCss: data,
        customSiteTitle: "Sistema DB API",
    };

    const options = {
        swaggerDefinition,
        apis: ["./api/*.js", "./api/routes/*.js", "./components.yaml"],
    };

    const swaggerDocs = swaggerJsDoc(options);

    app.get("/api-docs.json", (req, res) => {
        res.send(swaggerDocs);
    });

    app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs, cssOptions));
});

routes(app);
app.listen(port, () => console.log(`Servidor iniciado na porta: ${port}`));

module.exports = app;