/* eslint-disable indent */
const { ArmazensServices } = require("../services");
const armazensServices = new ArmazensServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class ArmazensController {
  static async pegaApagados(req, res) {
    try {
      const dados = await armazensServices.listaRegistrosApagado();
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : dados.length,
        rows: dados,
      };
      moduloglobais.log("API: armazensServices.listaRegistrosApagado", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: armazensServices.listaRegistrosApagado ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pegaApagado(req, res) {
    try {
      const { id } = req.params;
      const dados = await armazensServices.consultaRegistroApagado(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: armazensServices.consultaRegistroApagado, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: armazensServices.consultaRegistroApagado ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await armazensServices.pegaTodosOsRegistrosPaginacao({
          offset: 0,
          limit: 1000,
        })),
      };
      moduloglobais.log(
        "API: armazensServices.pegaTodosOsRegistrosPaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: armazensServices.pegaTodosOsRegistrosPaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await armazensServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: armazensServices.pegaUmRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: armazensServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async cria(req, res) {
    const novoRegistro = req.body;
    try {
      const dados = await armazensServices.criaRegistro(novoRegistro);
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log("API: armazensServices.pegaUmRegistro", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: armazensServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await armazensServices.atualizaRegistro(novasInfos, Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: armazensServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: armazensServices.atualizaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await armazensServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: armazensServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: armazensServices.apagaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async restaura(req, res) {
    try {
      const { id } = req.params;
      await armazensServices.restauraRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} restaurado`,
      };
      moduloglobais.log(
        "API: armazensServices.restauraRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: armazensServices.restauraRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = ArmazensController;
