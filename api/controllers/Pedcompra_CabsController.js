/* eslint-disable indent */
const { Pedcompra_CabsServices } = require("../services");
const pedcompra_cabsServices = new Pedcompra_CabsServices();
const { globais } = require("../modules");
const moduloglobais = new globais();
const Cotacao = require("../pdfgenerator/cotacao/index");
const cotacao = new Cotacao();

class Pedcompra_CabsController {
  static async pegaApagados(req, res) {
    try {
      const dados = await pedcompra_cabsServices.listaRegistrosApagado();
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : dados.length,
        rows: dados,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.listaRegistrosApagado",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.listaRegistrosApagado ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pegaApagado(req, res) {
    try {
      const { id } = req.params;
      const dados = await pedcompra_cabsServices.consultaRegistroApagado(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.consultaRegistroApagado, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.consultaRegistroApagado ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await pedcompra_cabsServices.pegaTodosOsRegistrosPaginacao({
          offset: req.body.inicio,
          limit: req.body.limit,
        })),
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.pegaTodosOsRegistrosWherePaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await pedcompra_cabsServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.pegaUmRegistro, ID: " + id,
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
        "API: pedcompra_cabsServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async updateTotal(req, res) {
    try {
      const { id } = req.params;
      const dados = await pedcompra_cabsServices.updateTotal(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.updateTotal, ID: " + id,
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
        "API: pedcompra_cabsServices.updateTotal ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async carregacotacao(req, res) {
    try {
      const { id } = req.params;
      const dados = await pedcompra_cabsServices.carregacotacao(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.carregacotacao, ID: " + id,
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
        "API: pedcompra_cabsServices.carregacotacao ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async cria(req, res) {
    try {
      const novoRegistro = req.body;
      const dados = await pedcompra_cabsServices.criaRegistro(novoRegistro);
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log("API: pedcompra_cabsServices.criaRegistro", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await pedcompra_cabsServices.atualizaRegistro(novasInfos, Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.atualizaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await pedcompra_cabsServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.apagaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async restaura(req, res) {
    try {
      const { id } = req.params;
      await pedcompra_cabsServices.restauraRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} restaurado`,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.restauraRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.restauraRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async imprimir(req, res) {
    try {
      const { id } = req.params;
      const dados = await pedcompra_cabsServices.carregacotacao(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.carregacotacao [imprimir], ID: " + id,
        "info"
      );
      let pdf = await cotacao.imprimir(retorno);
      retorno.row = { file: pdf };
      return res.status(200).json(retorno);
    } catch (error) {
      console.log(error);
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_cabsServices.carregacotacao [imprimir] ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = Pedcompra_CabsController;
