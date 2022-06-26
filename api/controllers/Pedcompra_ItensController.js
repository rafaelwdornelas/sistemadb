/* eslint-disable indent */
const { Pedcompra_ItensServices } = require("../services");
const pedcompra_ItensServices = new Pedcompra_ItensServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class Pedcompra_ItensController {
  static async pegaTodos(req, res) {
    try {
      const { id } = req.params;
      const where = {
        COTACAO_ID: id,
      };
      const retorno = {
        sucesso: true,
        ...(await pedcompra_ItensServices.pegaTodosOsRegistrosWherePaginacao(
          where,
          {
            offset: req.body.inicio,
            limit: req.body.limit,
          }
        )),
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.pegaTodosOsRegistrosWherePaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await pedcompra_ItensServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.pegaUmRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      console.log(error);
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async cria(req, res) {
    try {
      const novoRegistro = req.body;
      const dados = await pedcompra_ItensServices.criaRegistro(novoRegistro);
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log("API: pedcompra_ItensServices.criaRegistro", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await pedcompra_ItensServices.atualizaRegistro(novasInfos, Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.atualizaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await pedcompra_ItensServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_ItensServices.apagaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = Pedcompra_ItensController;
