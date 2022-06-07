const bodyParser = require("body-parser");

const clientes = require("./clientesRoute");
const clientesfamilias = require("./clientesfamiliasRoute");
const autentica = require("./autenticaRouter");
const municipios = require("./municipiosRoute");
const pais = require("./paisRoute");
const endererecos = require("./enderecosRoute");
const telefones = require("./telefonesRoute");
const cnaes = require("./cnaesRoute");
const unidades = require("./unidadesRoute");
const formapags = require("./formapagsRoute");
const lojas = require("./lojasRoute");
const funcionariogrupos = require("./funcionariogruposRoute");
const bancodedados = require("./bancodedados");

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
        cnaes,
        unidades,
        formapags,
        lojas,
        funcionariogrupos,
        bancodedados
    );
};