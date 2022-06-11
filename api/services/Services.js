const database = require("../models");
const sequelize = require("sequelize");
class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: {...where } });
  }

  async pegaTodosOsRegistrosPaginacao(agregadores) {
    return database[this.nomeDoModelo].findAndCountAll({
      where: {},
      ...agregadores,
    });
  }

  async pegaTodosOsRegistrosWherePaginacao(where = {}, agregadores) {
    return database[this.nomeDoModelo].findAndCountAll({
      where: {...where },
      ...agregadores,
    });
  }

  async pegaRegistrosAtivos(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: {...where } });
  }

  async pegaUmRegistro(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: {...where } });
  }

  async criaRegistro(dados) {
    return database[this.nomeDoModelo].create(dados);
  }

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModelo].update(
      dadosAtualizados, { where: { id: id } },
      transacao
    );
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return database[this.nomeDoModelo].update(
      dadosAtualizados, { where: {...where } },
      transacao
    );
  }

  async apagaRegistro(id) {
    return database[this.nomeDoModelo].destroy({ where: { id: id } });
  }

  async restauraRegistro(id) {
    return database[this.nomeDoModelo].restore({ where: { id: id } });
  }

  async consultaRegistroApagado(id) {
    return database[this.nomeDoModelo].findOne({
      paranoid: false,
      where: {
        id: Number(id),
        DELETADO_EM: {
          [sequelize.Op.ne]: null,
        },
      },
    });
  }

  async listaRegistrosApagado() {
    return database[this.nomeDoModelo].findAll({
      paranoid: false,
      where: {
        DELETADO_EM: {
          [sequelize.Op.ne]: null,
        },
      },
    });
  }
}

module.exports = Services;