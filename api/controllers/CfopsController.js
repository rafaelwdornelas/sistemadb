/* eslint-disable indent */
const { CfopsServices } = require("../services");
const cfopsServices = new CfopsServices();
const sequelize = require("sequelize");
const { globais } = require("../modules");
const moduloglobais = new globais();

class CfopsController {
  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await cfopsServices.pegaTodosOsRegistrosPaginacao({
          offset: 0,
          limit: 1000,
          order: ["CFOP"],
        })),
      };
      moduloglobais.log(
        "API: cfopsServices.pegaTodosOsRegistrosWherePaginacao",
        "error"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cfopsServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async buscaRegistroCount(req, res) {
    try {
      const where = {
        [sequelize.Op.or]: [
          {
            DESC_SIMPLES: {
              [sequelize.Op.like]: `%${req.body.busca}%`,
            },
          },
          {
            DESC_APLICACAO: {
              [sequelize.Op.like]: `%${req.body.busca}%`,
            },
          },
        ],
      };
      const retorno = {
        sucesso: true,
        ...(await cfopsServices.pegaTodosOsRegistrosWherePaginacao(where, {
          offset: req.body.inicio,
          limit: req.body.limit,
          order: ["CFOP"],
        })),
      };
      moduloglobais.log(
        "API: cfopsServices.pegaTodosOsRegistrosWherePaginacao, Busca: " +
          req.body.busca,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cfopsServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await cfopsServices.pegaUmCFOP({ CFOP: id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log("API: cfopsServices.pegaUmRegistro, ID:" + id, "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cfopsServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = CfopsController;
