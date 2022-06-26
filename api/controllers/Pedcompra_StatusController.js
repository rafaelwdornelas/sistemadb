/* eslint-disable indent */
const { Pedcompra_StatusServices } = require("../services");
const pedcompra_statusServices = new Pedcompra_StatusServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class Pedcompra_StatusController {
  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await pedcompra_statusServices.pegaTodosOsRegistrosPaginacao({
          offset: 0,
          limit: 1000,
        })),
      };
      moduloglobais.log(
        "API: pedcompra_statusServices.pegaTodosOsRegistrosPaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: pedcompra_statusServices.pegaTodosOsRegistrosPaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = Pedcompra_StatusController;
