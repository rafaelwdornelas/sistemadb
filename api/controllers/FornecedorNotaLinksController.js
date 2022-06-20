/* eslint-disable indent */
const { FornecedornotalinksServices } = require("../services");
const fornecedornotalinksServices = new FornecedornotalinksServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class FornecedorNotaLinksController {
  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await fornecedornotalinksServices.pegaTodosOsRegistrosPaginacao({
          offset: 0,
          limit: 1000,
        })),
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.pegaTodosOsRegistrosPaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      console.log(error);
      moduloglobais.log(
        "API: fornecedornotalinksServices.pegaTodosOsRegistrosPaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await fornecedornotalinksServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.pegaUmRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.pegaUmRegistro ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async cria(req, res) {
    const novoRegistro = req.body;
    try {
      const dados = await fornecedornotalinksServices.criaRegistro(
        novoRegistro
      );
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.pegaUmRegistro",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await fornecedornotalinksServices.atualizaRegistro(
        novasInfos,
        Number(id)
      );
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.atualizaRegistro ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await fornecedornotalinksServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: fornecedornotalinksServices.apagaRegistro ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = FornecedorNotaLinksController;
