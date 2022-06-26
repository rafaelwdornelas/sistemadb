const Services = require("./Services");
const database = require("../models");
class Pedcompra_CabsServices extends Services {
  constructor() {
    super("PEDCOMPRA_CABS");
  }
  async carregacotacao(id) {
    const pedido = await database[this.nomeDoModelo].findOne({
      where: { id: id },
    });
    const fornecedor = await database["CLIENTES"].findAll({
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
      where: { id: pedido.FORNECEDOR },
    });
    const itens = await database["PEDCOMPRA_ITENS"].findAll({
      where: { PEDCOMPRA_ID: id },
    });
    const retorno = {
      pedido: pedido,
      fornecedor: fornecedor,
      itens: itens,
    };
    return retorno;
  }

  async updateTotal(id) {
    const items = await database["PEDCOMPRA_ITENS"].findAll({
      where: { PEDCOMPRA_ID: id },
    });
    const cotacao = await database[this.nomeDoModelo].findOne({
      where: { id: id },
    });
    if (items.length > 0) {
      let valormercadorias = items
        .map((item) => item.VALORTOTAL)
        .reduce((prev, curr) => prev + curr, 0);

      await database[this.nomeDoModelo].update(
        {
          VALORMERCADORIAS: valormercadorias,
          VALORTOTAL: valormercadorias + cotacao.VALORTAXAS,
        },
        { where: { id: id } }
      );
      return await database[this.nomeDoModelo].findOne({ where: { id: id } });
    }
  }
}

module.exports = Pedcompra_CabsServices;
