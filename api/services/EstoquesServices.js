const Services = require("./Services");
const database = require("../models");
const sequelize = require("sequelize");
class EstoquesServices extends Services {
  constructor() {
    super("ESTOQUES");
  }

  async getsaldoprodutoall(id) {
    return database[this.nomeDoModelo].findAll({
      where: { PRODUTO: id },
      order: [
        ["VALIDADE", "ASC"],
        ["LOTE", "ASC"],
      ],
    });
  }

  async getsaldoprodutoarmazem(id, armazem) {
    return database[this.nomeDoModelo].findAll({
      where: { PRODUTO: id, ARMAZEM: armazem },
      order: [
        ["VALIDADE", "ASC"],
        ["LOTE", "ASC"],
      ],
    });
  }

  async getvalidadeprodutoall(data) {
    return database[this.nomeDoModelo].findAll({
      where: { VALIDADE: { [sequelize.Op.lte]: data } },
      order: [
        ["VALIDADE", "ASC"],
        ["LOTE", "ASC"],
      ],
    });
  }

  async getvalidadeprodutoarmazem(data, armazem) {
    console.log(data, armazem);
    return database[this.nomeDoModelo].findAll({
      where: { VALIDADE: { [sequelize.Op.lte]: data }, ARMAZEM: armazem },
      order: [
        ["VALIDADE", "ASC"],
        ["LOTE", "ASC"],
      ],
    });
  }
}

module.exports = EstoquesServices;
