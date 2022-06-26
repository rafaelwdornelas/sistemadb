const Services = require("./Services");
const database = require("../models");
class Pedcompra_CabsServices extends Services {
  constructor() {
    super("PEDCOMPRA_CABS");
  }
  async carregacotacao(id) {
    const cotacao = await database[this.nomeDoModelo].findOne({
      where: { id: id },
    });
    const itens = await database["PEDCOMPRA_ITENS"].findAll({
      where: { PEDCOMPRA_ID: id },
    });
    const retorno = {
      cotacao: cotacao,
      itens: itens,
    };
    return retorno;
  }

  async updateTotal(id) {
    const items = await database["PEDCOMPRA_ITENS"].findAll({
      where: { PEDCOMPRA_ID: id },
    });
    const cotacao = await database[this.nomeDoModelo].findOne({
      where: { id: id },
    });
    if (items.length > 0) {
      let valormercadorias = items
        .map((item) => item.VALORTOTAL)
        .reduce((prev, curr) => prev + curr, 0);

      await database[this.nomeDoModelo].update(
        {
          VALORMERCADORIAS: valormercadorias,
          VALORTOTAL: valormercadorias + cotacao.VALORTAXAS,
        },
        { where: { id: id } }
      );
      return await database[this.nomeDoModelo].findOne({ where: { id: id } });
    }
  }
}

module.exports = Pedcompra_CabsServices;
