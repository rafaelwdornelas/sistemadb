/* eslint-disable indent */
const { Cotacao_StatusServices } = require("../services");
const cotacao_statusServices = new Cotacao_StatusServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class Cotacao_StatusController {
  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await cotacao_statusServices.pegaTodosOsRegistrosPaginacao({
          offset: 0,
          limit: 1000,
        })),
      };
      moduloglobais.log(
        "API: cotacao_statusServices.pegaTodosOsRegistrosPaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: cotacao_statusServices.pegaTodosOsRegistrosPaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = Cotacao_StatusController;
