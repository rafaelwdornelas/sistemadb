const Services = require("./Services");
const database = require("../models");

class Cotacao_CabsServices extends Services {
  constructor() {
    super("COTACAO_CABS");
  }

  async carregacotacao(id) {
    const cotacao = await database[this.nomeDoModelo].findOne({
      where: { id: id },
    });
    const cliente = await database["CLIENTES"].findAll({
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
      where: { id: cotacao.CLIENTE },
    });
    const itens = await database["COTACAO_ITENS"].findAll({
      where: { COTACAO_ID: id },
    });
    const retorno = {
      cotacao: cotacao,
      cliente: cliente,
      itens: itens,
    };
    return retorno;
  }

  async updateTotal(id) {
    const items = await database["COTACAO_ITENS"].findAll({
      where: { COTACAO_ID: id },
    });
    if (items.length > 0) {
      let valoroginal = items
        .map((item) => item.VALORORIGINAL)
        .reduce((prev, curr) => prev + curr, 0);
      let valorund = items
        .map((item) => item.VALORUNT)
        .reduce((prev, curr) => prev + curr, 0);
      let valortotal = items
        .map((item) => item.VALORTOTAL)
        .reduce((prev, curr) => prev + curr, 0);
      let valortotaloriginal = items
        .map((item) => item.VALORORIGINAL + item.QUANTIDADE)
        .reduce((prev, curr) => prev + curr, 0);
      let descontoporc = valortotal / valortotaloriginal;
      descontoporc = descontoporc * 100;
      if (valoroginal == valorund) descontoporc = 0;
      let descontovalor = items
        .map((item) => item.DESCONTOVALOR)
        .reduce((prev, curr) => prev + curr, 0);
      /* console.log("valoroginal", valoroginal);
      console.log("valorund", valorund);
      console.log("valortotal", valortotal);
      console.log("valortotaloriginal", valortotaloriginal);
      console.log("descontoporc", descontoporc);
      console.log("descontovalor", descontovalor); */
      await database[this.nomeDoModelo].update(
        {
          DESCONTOPERC: descontoporc,
          DESCONTOVALOR: descontovalor,
          TOTAL: valortotal,
        },
        { where: { id: id } }
      );
      return await database[this.nomeDoModelo].findOne({ where: { id: id } });
    }
  }
}

module.exports = Cotacao_CabsServices;
