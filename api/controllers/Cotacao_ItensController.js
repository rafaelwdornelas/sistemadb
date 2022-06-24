/* eslint-disable indent */
const { Cotacao_ItensServices } = require("../services");
const cotacao_itensServices = new Cotacao_ItensServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class Cotacao_ItensController {
  static async pegaTodos(req, res) {
    try {
      const { id } = req.params;
      const where = {
        COTACAO_ID: id,
      };
      const retorno = {
        sucesso: true,
        ...(await cotacao_itensServices.pegaTodosOsRegistrosWherePaginacao(
          where,
          {
            offset: req.body.inicio,
            limit: req.body.limit,
          }
        )),
      };
      moduloglobais.log(
        "API: cotacao_itensServices.pegaTodosOsRegistrosWherePaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_itensServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await cotacao_itensServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: cotacao_itensServices.pegaUmRegistro, ID: " + id,
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
        "API: cotacao_itensServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async cria(req, res) {
    try {
      const novoRegistro = req.body;
      const dados = await cotacao_itensServices.criaRegistro(novoRegistro);
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log("API: cotacao_itensServices.criaRegistro", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_itensServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await cotacao_itensServices.atualizaRegistro(novasInfos, Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: cotacao_itensServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_itensServices.atualizaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await cotacao_itensServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: cotacao_itensServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_itensServices.apagaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = Cotacao_ItensController;
