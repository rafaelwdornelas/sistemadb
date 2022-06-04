const bodyParser = require("body-parser");

const clientes = require("./clientesRoute");
const clientesfamilias = require("./clientesfamiliasRoute");
const autentica = require("./autenticaRouter");
const municipios = require("./municipiosRoute");
const pais = require("./paisRoute");
const endererecos = require("./enderecosRoute");
const telefones = require("./telefonesRoute");
const cnaes = require("./cnaesRoute");

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        clientes,
        clientesfamilias,
        autentica,
        municipios,
        pais,
        endererecos,
        telefones,
        cnaes
    );
};