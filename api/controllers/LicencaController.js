const { crypto } = require("../modules");
const modulocrypto = new crypto();
const { LojasServices } = require("../services");
const lojasServices = new LojasServices();
class JWTController {
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
                console.log(dados.DataLimite, hoje);
                if (LojaInfors.LJ_NOME != dados.RazaoSocial) {
                    return res.status(401).json("Não foi possível identificar a empresa");
                } else if (hoje > dados.DataLimite) {
                    return res.status(401).json("Sua licença expirou");
                } else {
                    next();
                }
            })
            .catch((error) => {
                return res.status(401).json(error.message);
            });
    }
}

module.exports = JWTController;