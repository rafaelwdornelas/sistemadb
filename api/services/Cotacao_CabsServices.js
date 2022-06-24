const Services = require("./Services");
const database = require("../models");

class Cotacao_CabsServices extends Services {
  constructor() {
    super("COTACAO_CABS");
  }

  async updateTotal(id) {
    const items = await database["COTACAO_ITENS"].findAll({
      where: { COTACAO_ID: id },
    });
    if (items.length > 0) {
      let valoroginal = items
        .map((item) => item.VALORORIGINAL)
        .reduce((prev, curr) => prev + curr, 0);
      let valorund = items
        .map((item) => item.VALORUNT)
        .reduce((prev, curr) => prev + curr, 0);
      let valortotal = items
        .map((item) => item.VALORTOTAL)
        .reduce((prev, curr) => prev + curr, 0);
      let valortotaloriginal = items
        .map((item) => item.VALORORIGINAL + item.QUANTIDADE)
        .reduce((prev, curr) => prev + curr, 0);
      let descontoporc = valortotal / valortotaloriginal;
      descontoporc = descontoporc * 100;
      if (valoroginal == valorund) descontoporc = 0;
      let descontovalor = items
        .map((item) => item.DESCONTOVALOR)
        .reduce((prev, curr) => prev + curr, 0);
      /* console.log("valoroginal", valoroginal);
      console.log("valorund", valorund);
      console.log("valortotal", valortotal);
      console.log("valortotaloriginal", valortotaloriginal);
      console.log("descontoporc", descontoporc);
      console.log("descontovalor", descontovalor); */
      await database[this.nomeDoModelo].update(
        {
          DESCONTOPERC: descontoporc,
          DESCONTOVALOR: descontovalor,
          TOTAL: valortotal,
        },
        { where: { id: id } }
      );
      return await database[this.nomeDoModelo].findOne({ where: { id: id } });
    }
  }
}

module.exports = Cotacao_CabsServices;
