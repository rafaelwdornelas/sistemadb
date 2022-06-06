const { crypto, globais } = require("../modules");
const modulocrypto = new crypto();
const moduloglobais = new globais();
const { LojasServices } = require("../services");
const lojasServices = new LojasServices();
class LicencaController {
    static async Verifica(req, res, next) {
        let LojaInfors = await lojasServices.pegaUmRegistro({ id: 1 });
        LojaInfors = LojaInfors.dataValues;
        //console.log(LojaInfors);
        //apenas para teste, terminar primeiro os controles e cadastro de empresa para contunuar esse controller
        let licenca = LojaInfors.LJ_LICENCADEUSO;

        modulocrypto
            .descrypt(licenca)
            .then(async(dados) => {
                dados = JSON.parse(dados);
                let hoje = new Date();
                hoje = hoje.getTime();
                if (LojaInfors.LJ_NOME != dados.RazaoSocial) {
                    moduloglobais.log("LicencaController: Loja não autorizada", "error");
                    return res.status(401).json("Não foi possível identificar a empresa");
                } else if (hoje > dados.DataLimite) {
                    moduloglobais.log("LicencaController: Sua licença expirou", "error");
                    return res.status(401).json("Sua licença expirou");
                } else {
                    next();
                }
            })
            .catch((error) => {
                moduloglobais.log("LicencaController: Error: " + error, "error");
                return res.status(401).json(error.message);
            });
    }
}

module.exports = LicencaController;