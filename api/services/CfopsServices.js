const Services = require("./Services");
const database = require("../models");
class CfopsServices extends Services {
  constructor() {
    super("CFOPS");
  }

  async pegaUmCFOP(where = {}) {
    return database[this.nomeDoModelo].findOne({
      where: { ...where },
      order: ["CFOP"],
    });
  }
}

module.exports = CfopsServices;
