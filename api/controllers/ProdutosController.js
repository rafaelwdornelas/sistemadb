/* eslint-disable indent */
const { ProdutosServices } = require("../services");
const produtosServices = new ProdutosServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class ProdutosController {
  static async pegaApagados(req, res) {
    try {
      const dados = await produtosServices.listaRegistrosApagado();
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : dados.length,
        rows: dados,
      };
      moduloglobais.log("API: produtosServices.listaRegistrosApagado", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: produtosServices.listaRegistrosApagado ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pegaApagado(req, res) {
    try {
      const { id } = req.params;
      const dados = await produtosServices.consultaRegistroApagado(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: produtosServices.consultaRegistroApagado, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: produtosServices.consultaRegistroApagado ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await produtosServices.pegaTodosOsRegistrosPaginacao({
          offset: req.body.inicio,
          limit: req.body.limit,
        })),
      };
      moduloglobais.log(
        "API: produtosServices.pegaTodosOsRegistrosPaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: produtosServices.pegaTodosOsRegistrosPaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await produtosServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: produtosServices.pegaUmRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: produtosServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async cria(req, res) {
    const novoRegistro = req.body;
    try {
      const dados = await produtosServices.criaRegistro(novoRegistro);
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log("API: produtosServices.pegaUmRegistro", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: produtosServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await produtosServices.atualizaRegistro(novasInfos, Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: produtosServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: produtosServices.atualizaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await produtosServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: produtosServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: produtosServices.apagaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async restaura(req, res) {
    try {
      const { id } = req.params;
      await produtosServices.restauraRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} restaurado`,
      };
      moduloglobais.log(
        "API: produtosServices.restauraRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: produtosServices.restauraRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = ProdutosController;
