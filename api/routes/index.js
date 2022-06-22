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
const funcionariocargos = require("./funcionariocargosRoute");
const bancodedados = require("./bancodedados");
const funcionarios = require("./funcionariosRoute");
const usuarios = require("./usuariosRoute");
const prodfamilias = require("./prodfamiliasRoute");
const estoques = require("./produtosestoquesRoute");
const armazens = require("./produtosarmazensRoute");
const produtos = require("./produtosRoute");
const fornecedornotalinks = require("./fornecedornotalinksRoute");
const cfops = require("./cfopsRoute");
const produtoformulas = require("./produtoformulasRoute");
const roles = require("./rolesRouter");
const permissions = require("./permissionsRoute");

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
    funcionariocargos,
    bancodedados,
    funcionarios,
    usuarios,
    prodfamilias,
    estoques,
    armazens,
    produtos,
    fornecedornotalinks,
    cfops,
    produtoformulas,
    roles,
    permissions
  );
};
