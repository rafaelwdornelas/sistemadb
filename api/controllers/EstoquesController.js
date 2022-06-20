/* eslint-disable indent */
const { EstoquesServices } = require("../services");
const estoquesServices = new EstoquesServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class EstoquesController {
  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await estoquesServices.pegaTodosOsRegistrosPaginacao({
          offset: req.body.inicio,
          limit: req.body.limit,
        })),
      };
      moduloglobais.log(
        "API: estoquesServices.pegaTodosOsRegistrosPaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.pegaTodosOsRegistrosPaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await estoquesServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: estoquesServices.pegaUmRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async cria(req, res) {
    const novoRegistro = req.body;
    try {
      const dados = await estoquesServices.criaRegistro(novoRegistro);
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log("API: estoquesServices.pegaUmRegistro", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await estoquesServices.atualizaRegistro(novasInfos, Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: estoquesServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.atualizaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await estoquesServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: estoquesServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.apagaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async getsaldoprodutoall(req, res) {
    try {
      const { id } = req.params;
      const dados = await estoquesServices.getsaldoprodutoall(id);
      let sum = 0;
      dados.forEach((value) => {
        sum += value.QUANTIDADE;
      });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : sum,
        row: dados,
      };
      moduloglobais.log(
        "API: estoquesServices.getsaldoprodutoall, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.getsaldoprodutoall ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async getsaldoprodutoarmazem(req, res) {
    try {
      const { id, armazem } = req.params;
      const dados = await estoquesServices.getsaldoprodutoarmazem(id, armazem);
      let sum = 0;
      dados.forEach((value) => {
        sum += value.QUANTIDADE;
      });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : sum,
        row: dados,
      };
      moduloglobais.log(
        "API: estoquesServices.getsaldoprodutoarmazem, ID: " +
          id +
          " Armazem: " +
          armazem,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.getsaldoprodutoarmazem ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async getvalidadeprodutoall(req, res) {
    try {
      const { data } = req.params;
      const dados = await estoquesServices.getvalidadeprodutoall(data);
      let sum = 0;
      dados.forEach((value) => {
        sum += value.QUANTIDADE;
      });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : sum,
        row: dados,
      };
      moduloglobais.log(
        "API: estoquesServices.getvalidadeprodutoall, Data: " + data,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.getvalidadeprodutoall ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async getvalidadeprodutoarmazem(req, res) {
    try {
      const { data, armazem } = req.params;
      const dados = await estoquesServices.getvalidadeprodutoarmazem(
        data,
        armazem
      );
      let sum = 0;
      dados.forEach((value) => {
        sum += value.QUANTIDADE;
      });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : sum,
        row: dados,
      };
      moduloglobais.log(
        "API: estoquesServices.getvalidadeprodutoarmazem, Data: " +
          data +
          " Armazem: " +
          armazem,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.getvalidadeprodutoarmazem ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async retiradadeproduto(req, res) {
    const { id, armazem, quantidade } = req.body;
    try {
      const dados = await estoquesServices.retiradadeproduto(
        id,
        armazem,
        quantidade
      );
      let retorno = {
        sucesso: true,
        rows: dados,
      };
      moduloglobais.log(
        "API: estoquesServices.retiradadeproduto, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: estoquesServices.retiradadeproduto ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = EstoquesController;
