const { crypto } = require("../modules");
const modulocrypto = new crypto();
class JWTController {
    static async Verifica(req, res, next) {
        //apenas para teste, terminar primeiro os controles e cadastro de empresa para contunuar esse controller
        let testelicenca =
            "7b226976223a223837633738373663386131396539346135353763343465633634363135326334222c22656e6372797074656444617461223a22636463343234626336386363306331306161313136303237343662383964353462663165353639316531313639626261366638633737303134666532623061316433613539393838653230616662346265643466376531346230633764313433313962396337316361393036303534656262303435633530303266653466306466353566336636306331313838306266313362646237376431643931386233333832373762346265386338646566623033653138346464306334353766656136227d";

        modulocrypto
            .descrypt(testelicenca)
            .then(async(dados) => {
                dados = JSON.parse(dados);
                console.log(dados);
            })
            .catch((error) => {
                console.log(error);
            });

        next();
    }
}

module.exports = JWTController;