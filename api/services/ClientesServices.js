const Services = require("./Services");
const database = require("../models");

class ClientesServices extends Services {
  constructor() {
    super("CLIENTES");
  }

  async pegaTodosDados(id) {
    return database[this.nomeDoModelo].findAll({
      attributes: [
        "id",
        "CLI_LOJA",
        "CLI_ATIVO",
        "CLI_FORNECEDOR",
        "CLI_TRANSPORTADORA",
        "CLI_NOME",
        "CLI_NOME_FANTASIA",
        "CLI_SEXO",
        "CLI_TIPO",
        "CLI_CPF_CNPJ",
        "CLI_RG",
        "CLI_DTNASC",
        "CLI_ESTRANGEIRO",
        "CLI_PASSAPORTE",
        "CLI_EMAIL",
        "CLI_EMAIL_COB",
        "CLI_SITE",
        "CLI_IE",
        "CLI_IM",
        "CLI_IR",
        "CLI_CNAE",
        "CLI_NATUREZA",
        "CLI_VENDEDOR",
        "CLI_COMISSAO",
        "CLI_FRETE_TIPO",
        "CLI_AIRRF",
        "CLI_ISS_RECOLHE",
        "CLI_COD_SUFRAMA",
        "CLI_DESC_SUFRAMA",
        "CLI_ISS_PRECO",
        "CLI_INSS_RECOLHE",
        "CLI_CONFINS_RECOLHE",
        "CLI_CSLL_RECOLHE",
        "CLI_PIS_RECOLHE",
        "CLI_SIMPLESSC",
        "CLI_TARE",
        "CLI_FRETISS",
        "CLI_MABATIMENTO",
        "CLI_IRRF",
        "CLI_ICMS",
        "CLI_FINAL",
        "CLI_CERVEJA",
        "CLI_VMIRRF",
        "CLI_FOMEZERO",
        "CLI_SIMPLES",
        "CLI_TPJ",
        "CLI_CTRANSPORTADORA",
        "CLI_TABELA",
        "CLI_DESCONTO",
        "CLI_SENHA",
        "CLI_OBS",
        "CRIADO_EM",
        "ATUALIZADO_EM",
        "DELETADO_EM",
      ],
      include: [
        { model: database["TELEFONES"], as: "TELEFONES" },
        { model: database["ENDERECOS"], as: "ENDERECOS" },
        { model: database["FORMAPAGS"] },
        { model: database["CLI_FAMILIAS"], as: "CLIFAMILIA" },
      ],
      where: { id: id },
    });
  }
}

module.exports = ClientesServices;
