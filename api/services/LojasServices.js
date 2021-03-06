const Services = require("./Services");
const database = require("../models");
const { crypto } = require("../modules");
const modulocrypto = new crypto();
class LojasServices extends Services {
  constructor() {
    super("LOJAS");
  }

  async adicionalicenca(id, dias) {
    let lojainfos = await database[this.nomeDoModelo].findOne({
      where: { id: id },
    });
    if (lojainfos) {
      lojainfos = lojainfos.dataValues;
      const hoje = new Date();
      let DataLimite = hoje.setDate(hoje.getDate() + dias);
      let dados = {
        CNPJ: lojainfos.LJ_CPF_CNPJ,
        RazaoSocial: lojainfos.LJ_NOME,
        DataLimite: DataLimite,
      };
      dados = JSON.stringify(dados);
      let LICENCADEUSO = await modulocrypto.encrypt(dados);
      if (LICENCADEUSO) {
        let retornoupdate = await database[this.nomeDoModelo].update(
          { LJ_LICENCADEUSO: LICENCADEUSO },
          { where: { id: id } }
        );
        if (retornoupdate == 1) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  async verificalicenca(id) {
    let lojainfos = await database[this.nomeDoModelo].findOne({
      where: { id: id },
    });
    if (lojainfos) {
      lojainfos = lojainfos.dataValues;
      let licenca = lojainfos.LJ_LICENCADEUSO;
      let LICENCADEUSO = await modulocrypto.descrypt(licenca);
      if (LICENCADEUSO) {
        LICENCADEUSO = JSON.parse(LICENCADEUSO);
        let hoje = new Date();
        hoje = hoje.getTime();
        var d = new Date(LICENCADEUSO.DataLimite),
          dformat =
            [
              (d.getMonth() + 1).toString().padStart(2, "0"),
              d.getDate().toString().padStart(2, "0"),
              d.getFullYear(),
            ].join("/") +
            " " +
            [
              d.getHours().toString().padStart(2, "0"),
              d.getMinutes().toString().padStart(2, "0"),
              d.getSeconds().toString().padStart(2, "0"),
            ].join(":");
        if (hoje > LICENCADEUSO.DataLimite) {
          LICENCADEUSO.validade = "Licen??a Vencida";
        } else {
          LICENCADEUSO.validade = "Licen??a V??lida";
        }
        LICENCADEUSO.DataLimite = dformat;
        return LICENCADEUSO;
      }
    } else {
      return false;
    }
  }
}

module.exports = LojasServices;
