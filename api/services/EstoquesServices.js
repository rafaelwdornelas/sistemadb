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

  async retiradadeproduto(id, armazem, quantidade) {
    //const t = await sequelizex.transaction();
    let sum = 0;
    let quant = quantidade;
    let retirados = [];
    let listaestoque = await database[this.nomeDoModelo].findAll({
      where: { PRODUTO: id, ARMAZEM: armazem },
      order: [
        ["VALIDADE", "ASC"],
        ["LOTE", "ASC"],
      ],
    });
    listaestoque.forEach((value) => {
      sum += value.QUANTIDADE;
    });
    if (sum < quant) {
      //t.rollback();
      throw new Error("Quantidade maior que o estoque");
    } else {
      listaestoque.forEach(async (value) => {
        if (value.QUANTIDADE == quant && quant > 0) {
          retirados.push({
            id: value.id,
            PRODUTO: value.PRODUTO,
            ARMAZEM: value.ARMAZEM,
            QUANTIDADE: value.QUANTIDADE,
            FABRICACAO: value.FABRICACAO,
            VALIDADE: value.VALIDADE,
            LOTE: value.LOTE,
          });
          quant = 0;
          //deleta registro do estoque
          database[this.nomeDoModelo].destroy({ where: { id: value.id } });
        } else if (value.QUANTIDADE < quant && quant > 0) {
          retirados.push({
            id: value.id,
            PRODUTO: value.PRODUTO,
            ARMAZEM: value.ARMAZEM,
            QUANTIDADE: value.QUANTIDADE,
            FABRICACAO: value.FABRICACAO,
            VALIDADE: value.VALIDADE,
            LOTE: value.LOTE,
          });
          quant = quant - value.QUANTIDADE;
          //deleta registro do estoque
          database[this.nomeDoModelo].destroy({ where: { id: value.id } });
        } else if (value.QUANTIDADE > quant && quant > 0) {
          retirados.push({
            id: value.id,
            PRODUTO: value.PRODUTO,
            ARMAZEM: value.ARMAZEM,
            QUANTIDADE: quant,
            FABRICACAO: value.FABRICACAO,
            VALIDADE: value.VALIDADE,
            LOTE: value.LOTE,
          });
          //atualiza registro do estoque
          let novovalor = value.QUANTIDADE - quant;
          quant = 0;

          await database[this.nomeDoModelo].update(
            { QUANTIDADE: novovalor },
            { where: { id: value.id } }
          );
        }
      });
    }

    //t.commit();
    return retirados;
  }
}

module.exports = EstoquesServices;
