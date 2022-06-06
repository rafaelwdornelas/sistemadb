const { crypto } = require("./api/modules");
const modulocrypto = new crypto();

(async() => {
    const hoje = new Date();
    // adicionar 30 dias ao dia atual
    let DataLimite = hoje.setDate(hoje.getDate() + 30);
    let dados = {
        CNPJ: "00000000000000",
        RazaoSocial: "EMPRESA DE TESTE",
        DataLimite: DataLimite,
    };
    dados = JSON.stringify(dados);
    let LICENCADEUSO = await modulocrypto.encrypt(dados);
    console.log(LICENCADEUSO);
    let descript = await modulocrypto.descrypt(LICENCADEUSO);
    console.log(descript);
})();