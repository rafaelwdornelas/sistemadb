/* eslint-disable indent */
const Services = require("./Services");
const database = require("../models");
class FuncionariosServices extends Services {
  constructor() {
    super("USUARIOS");
  }
  async getUsuario(id) {
    try {
      return await database[this.nomeDoModelo].findOne({
        include: [
          {
            model: database["FUNCIONARIOS"],
            as: "FUNCIONARIO",
            include: [
              {
                model: database["FUNCIONARIOGRUPOS"],
                as: "FUNCIONARIOGRUPO",
              },
              {
                model: database["FUNCIONARIOCARGOS"],
                as: "FUNCIONARIOCARGO",
              },
            ],
          },
        ],
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getLogin(username, senha) {
    try {
      return await database[this.nomeDoModelo].findOne({
        attributes: ["id", "USERNAME", "SENHA", "COD_FUNCIONARIO"],
        where: {
          USERNAME: username,
          SENHA: senha,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
  async updatetoken(id, refreshToken) {
    try {
      return await database[this.nomeDoModelo].update(
        { REFRESHTOKEN: refreshToken },
        {
          where: {
            id: id,
          },
        }
      );
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}

module.exports = FuncionariosServices;
