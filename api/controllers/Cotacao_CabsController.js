/* eslint-disable indent */
const { Cotacao_CabsServices } = require("../services");
const cotacao_cabsServices = new Cotacao_CabsServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class Cotacao_CabsController {
  static async pegaApagados(req, res) {
    try {
      const dados = await cotacao_cabsServices.listaRegistrosApagado();
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : dados.length,
        rows: dados,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.listaRegistrosApagado",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.listaRegistrosApagado ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pegaApagado(req, res) {
    try {
      const { id } = req.params;
      const dados = await cotacao_cabsServices.consultaRegistroApagado(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.consultaRegistroApagado, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.consultaRegistroApagado ERROR: " +
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
        ...(await cotacao_cabsServices.pegaTodosOsRegistrosPaginacao({
          offset: req.body.inicio,
          limit: req.body.limit,
        })),
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.pegaTodosOsRegistrosWherePaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await cotacao_cabsServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.pegaUmRegistro, ID: " + id,
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
        "API: cotacao_cabsServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async updateTotal(req, res) {
    try {
      const { id } = req.params;
      const dados = await cotacao_cabsServices.updateTotal(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.updateTotal, ID: " + id,
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
        "API: cotacao_cabsServices.updateTotal ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async carregacotacao(req, res) {
    try {
      const { id } = req.params;
      const dados = await cotacao_cabsServices.carregacotacao(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.carregacotacao, ID: " + id,
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
        "API: cotacao_cabsServices.carregacotacao ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async cria(req, res) {
    try {
      const novoRegistro = req.body;
      const dados = await cotacao_cabsServices.criaRegistro(novoRegistro);
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log("API: cotacao_cabsServices.criaRegistro", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await cotacao_cabsServices.atualizaRegistro(novasInfos, Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.atualizaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await cotacao_cabsServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.apagaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async restaura(req, res) {
    try {
      const { id } = req.params;
      await cotacao_cabsServices.restauraRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} restaurado`,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.restauraRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_cabsServices.restauraRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = Cotacao_CabsController;
