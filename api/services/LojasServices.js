const Services = require("./Services");
const database = require("../models");
const { crypto } = require("../modules");
const modulocrypto = new crypto();
class LojasServices extends Services {
    constructor() {
        super("LOJAS");
    }

    async adicionalicenca(id, dias) {
        let lojainfos = await database[this.nomeDoModelo].findOne({ id: id });
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
                let retornoupdate = await database[this.nomeDoModelo].update({ LJ_LICENCADEUSO: LICENCADEUSO }, { where: { id: id } });
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
}

module.exports = LojasServices;