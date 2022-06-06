const { Router } = require("express");
const Controller = require("../controllers/ClientesController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Manipulação de Clientes
 */

/**
 * @openapi
 * /clientes:
 *  post:
 *    summary: Todos
 *    description: |
 *      Pega todos os Clientes com Paginação
 *      <br><b>inicio</b>: Index do inicio da paginação
 *      <br><b>limit</b>: Quantidade de registros por paginação
 *    tags: [Clientes]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            inicio:
 *              summary: inicio do index da paginação
 *              type: integer
 *              example: 0
 *            limit:
 *              summary: limite de registros da paginação
 *              type: integer
 *              example: 10
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post("/clientes", JWTController.Verifica, Controller.pegaTodos);
/**
 * @openapi
 * /clientes/ativos:
 *  post:
 *    summary: Visuzaliza ativos
 *    description: |
 *      Pega todos os Clientes Ativos com Paginação
 *      <br><b>inicio</b>: Index do inicio da paginação
 *      <br><b>limit</b>: Quantidade de registros por paginação
 *    tags: [Clientes]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            inicio:
 *              summary: inicio do index da paginação
 *              type: integer
 *              example: 0
 *            limit:
 *              summary: limite de registros da paginação
 *              type: integer
 *              example: 10
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post("/clientes/ativos", JWTController.Verifica, Controller.pegaAtivos);
/**
 * @openapi
 * /clientes/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os Clientes Apagados
 *    tags: [Clientes]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
    "/clientes/apagados",
    JWTController.Verifica,
    Controller.pegaApagados
);

/**
 * @openapi
 * /clientes/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Retorna todos os Clientes Apagados
 *    tags: [Clientes]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
    "/clientes/apagados/:id",
    JWTController.Verifica,
    Controller.pegaApagado
);
/**
 * @openapi
 * /clientes/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Visualiza os Dados de um Cliente
 *    tags: [Clientes]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/clientes/:id", JWTController.Verifica, Controller.pegaTodosDados);

/**
 * @openapi
 * /clientes/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um Cliente no Banco de Dados
 *    tags: [Clientes]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            CLI_LOJA:
 *              summary: Código da Loja
 *              type: integer
 *              example: 1
 *            CLI_ATIVO:
 *              summary: N = inativo, S = ativo
 *              type: string
 *              example: S
 *            CLI_FAMILIA:
 *              summary: Familia do grupo de Cliente
 *              type: integer
 *              example: 1
 *            CLI_FORNECEDOR:
 *              summary: O Cadastro é de um fornecedor?
 *              type: boolean
 *              example: false
 *            CLI_TRANSPORTADORA:
 *              summary: O Cadastro é de uma transportadora?
 *              type: boolean
 *              example: false
 *            CLI_NOME:
 *              summary: Nome
 *              type: string
 *            CLI_NOME_FANTASIA:
 *              summary: Nome
 *              type: string
 *            CLI_SEXO:
 *              summary: F - Feminino, M - Masculino
 *              type: string
 *              example: M
 *            CLI_TIPO:
 *              summary: F - Fisica, J - Juridica
 *              type: string
 *              example: F
 *            CLI_CPF_CNPJ:
 *              summary: CPF ou CNPJ (não aceita repetição)
 *              type: string
 *            CLI_RG:
 *              summary: RG
 *              type: string
 *            CLI_DTNASC:
 *              summary: Data de Nascimento YYYYMMDD
 *              type: string
 *            CLI_ESTRANGEIRO:
 *             summary: É estrangeiro?
 *             type: boolean
 *             example: false
 *            CLI_PASSAPORTE:
 *             summary: Passaporte
 *             type: string
 *            CLI_EMAIL:
 *              summary: Email Principal
 *              type: string
 *            CLI_EMAIL_COB:
 *              summary: Email de Cobrança para envio de fatura e boletos
 *              type: string
 *            CLI_SITE:
 *              summary: Site
 *              type: string
 *            CLI_IE:
 *              summary: Inscrisão Estadual
 *              type: string
 *            CLI_IM:
 *              summary: Inscrisão Municipal
 *              type: string
 *            CLI_IR:
 *              summary: Inscrisão Rural
 *              type: string
 *            CLI_CNAE:
 *              summary: CNAE
 *              type: string
 *            CLI_NATUREZA:
 *              summary: Natureza da Operação
 *              type: integer
 *            CLI_VENDEDOR:
 *              summary: Vendendor Padrão
 *              type: integer
 *            CLI_COMISSAO:
 *              summary: Porcentagem de Comissão
 *              type: number
 *            CLI_FRETE_TIPO:
 *              summary: Tipo de Frete Padrão F - FOB , C - CIF
 *              type: string
 *              example: F
 *            CLI_AIRRF:
 *              summary: IRRF Alicota
 *              type: number
 *            CLI_ISS_RECOLHE:
 *              summary: RECOLHER - ISS?
 *              type: boolean
 *            CLI_COD_SUFRAMA:
 *              summary: Código da Suframa
 *              type: string
 *            CLI_DESC_SUFRAMA:
 *              summary: S - SIM, N - NÃO, I - ISMS (Desc  SUFRAMA)
 *              type: string
 *            CLI_ISS_PRECO:
 *              summary: ISS NO PREÇO?
 *              type: boolean
 *            CLI_INSS_RECOLHE:
 *              summary: Recolhe INSS?
 *              type: boolean
 *            CLI_CONFINS_RECOLHE:
 *              summary: Recolhe CONFINS?
 *              type: boolean
 *            CLI_CSLL_RECOLHE:
 *              summary: Recolhe CSLL?
 *              type: boolean
 *            CLI_PIS_RECOLHE:
 *              summary: Recolhe PIS?
 *              type: boolean
 *            CLI_SIMPLESSC:
 *              summary: Optante SIMPLES/SC?
 *              type: boolean
 *            CLI_TARE:
 *              summary: Contribuinte TARE?
 *              type: boolean
 *            CLI_FRETISS:
 *              summary:  1 - Cons Vrl Mínimo, 2 - Sempre Retém (Forma de retenção do ISS)
 *              type: string
 *            CLI_MABATIMENTO:
 *              summary:  1 - Cálculo do Sistema, 2 - Efetua Retenção,3 - Não Efetua Retenção (Modo de Abatimento de Imposto)
 *              type: string
 *            CLI_IRRF:
 *              summary: Recolhe IRRF?
 *              type: boolean
 *            CLI_ICMS:
 *              summary: Contribuinte do ICMS?
 *              type: boolean
 *            CLI_FINAL:
 *             summary: Controle para a NFe/NFCe para saber se o cliente é consumidor final
 *             type: boolean
 *            CLI_CERVEJA:
 *             summary: Controle para NFe/NFCe para saber se o cliente é microcervejaria
 *             type: boolean
 *            CLI_VMIRRF:
 *              summary: Valor minimo IRRF?
 *              type: boolean
 *            CLI_FOMEZERO:
 *              summary: Participação Fome Zero?
 *              type: boolean
 *            CLI_SIMPLES:
 *              summary: Participação Simples Nacional?
 *              type: boolean
 *            CLI_TPJ:
 *              summary: 1 - ME - Micro Empresa, 2 - EPP - Empresa de Pequeno Porte,3 - MEI - Microempreendedor Individual,4 - Não Optante (Tipo de Pessoa Juridica?)
 *              type: string
 *            CLI_CTRANSPORTADORA:
 *              summary: Código da Transportadora Padrão
 *              type: integer
 *            CLI_FPAGAMENTO:
 *              summary: Tabela de Pagamento Padrão
 *              type: integer
 *            CLI_TABELA:
 *              summary: Código da Tabela de Preços
 *              type: integer
 *            CLI_DESCONTO:
 *              summary: Porcentagem de Desconto Padrão
 *              type: number
 *            CLI_SENHA:
 *              summary: Senha de acesso para outros sistemas
 *              type: string
 *            CLI_OBS:
 *              summary: Campo para Observação
 *              type: string
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
    "/clientes/novo",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.cria
);
/**
 * @openapi
 * /clientes/{id}/restaura:
 *  post:
 *    summary: Restaura deletado
 *    description: Restaura o cadastro de um Cliente Deletado
 *    tags: [Clientes]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Cliente.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
    "/clientes/:id/restaura",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.restaura
);
/**
 * @openapi
 * /clientes/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera os Dados de um Cliente no Banco de Dados
 *    tags: [Clientes]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Cliente.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            CLI_LOJA:
 *              summary: Código da Loja
 *              type: integer
 *              example: 1
 *            CLI_ATIVO:
 *              summary: N = inativo, S = ativo
 *              type: string
 *              example: S
 *            CLI_FAMILIA:
 *              summary: Familia do grupo de Cliente
 *              type: integer
 *              example: 1
 *            CLI_FORNECEDOR:
 *              summary: O Cadastro é de um fornecedor?
 *              type: boolean
 *              example: false
 *            CLI_TRANSPORTADORA:
 *              summary: O Cadastro é de uma transportadora?
 *              type: boolean
 *              example: false
 *            CLI_NOME:
 *              summary: Nome
 *              type: string
 *            CLI_NOME_FANTASIA:
 *              summary: Nome
 *              type: string
 *            CLI_SEXO:
 *              summary: F - Feminino, M - Masculino
 *              type: string
 *              example: M
 *            CLI_TIPO:
 *              summary: F - Fisica, J - Juridica
 *              type: string
 *              example: F
 *            CLI_CPF_CNPJ:
 *              summary: CPF ou CNPJ (não aceita repetição)
 *              type: string
 *            CLI_RG:
 *              summary: RG
 *              type: string
 *            CLI_DTNASC:
 *              summary: Data de Nascimento YYYYMMDD
 *              type: string
 *            CLI_ESTRANGEIRO:
 *             summary: É estrangeiro?
 *             type: boolean
 *             example: false
 *            CLI_PASSAPORTE:
 *             summary: Passaporte
 *             type: string
 *            CLI_EMAIL:
 *              summary: Email Principal
 *              type: string
 *            CLI_EMAIL_COB:
 *              summary: Email de Cobrança para envio de fatura e boletos
 *              type: string
 *            CLI_SITE:
 *              summary: Site
 *              type: string
 *            CLI_IE:
 *              summary: Inscrisão Estadual
 *              type: string
 *            CLI_IM:
 *              summary: Inscrisão Municipal
 *              type: string
 *            CLI_IR:
 *              summary: Inscrisão Rural
 *              type: string
 *            CLI_CNAE:
 *              summary: CNAE
 *              type: string
 *            CLI_NATUREZA:
 *              summary: Natureza da Operação
 *              type: integer
 *            CLI_VENDEDOR:
 *              summary: Vendendor Padrão
 *              type: integer
 *            CLI_COMISSAO:
 *              summary: Porcentagem de Comissão
 *              type: number
 *            CLI_FRETE_TIPO:
 *              summary: Tipo de Frete Padrão F - FOB , C - CIF
 *              type: string
 *              example: F
 *            CLI_AIRRF:
 *              summary: IRRF Alicota
 *              type: number
 *            CLI_ISS_RECOLHE:
 *              summary: RECOLHER - ISS?
 *              type: boolean
 *            CLI_COD_SUFRAMA:
 *              summary: Código da Suframa
 *              type: string
 *            CLI_DESC_SUFRAMA:
 *              summary: S - SIM, N - NÃO, I - ISMS (Desc  SUFRAMA)
 *              type: string
 *            CLI_ISS_PRECO:
 *              summary: ISS NO PREÇO?
 *              type: boolean
 *            CLI_INSS_RECOLHE:
 *              summary: Recolhe INSS?
 *              type: boolean
 *            CLI_CONFINS_RECOLHE:
 *              summary: Recolhe CONFINS?
 *              type: boolean
 *            CLI_CSLL_RECOLHE:
 *              summary: Recolhe CSLL?
 *              type: boolean
 *            CLI_PIS_RECOLHE:
 *              summary: Recolhe PIS?
 *              type: boolean
 *            CLI_SIMPLESSC:
 *              summary: Optante SIMPLES/SC?
 *              type: boolean
 *            CLI_TARE:
 *              summary: Contribuinte TARE?
 *              type: boolean
 *            CLI_FRETISS:
 *              summary:  1 - Cons Vrl Mínimo, 2 - Sempre Retém (Forma de retenção do ISS)
 *              type: string
 *            CLI_MABATIMENTO:
 *              summary:  1 - Cálculo do Sistema, 2 - Efetua Retenção,3 - Não Efetua Retenção (Modo de Abatimento de Imposto)
 *              type: string
 *            CLI_IRRF:
 *              summary: Recolhe IRRF?
 *              type: boolean
 *            CLI_ICMS:
 *              summary: Contribuinte do ICMS?
 *              type: boolean
 *            CLI_FINAL:
 *             summary: Controle para a NFe/NFCe para saber se o cliente é consumidor final
 *             type: boolean
 *            CLI_CERVEJA:
 *             summary: Controle para NFe/NFCe para saber se o cliente é microcervejaria
 *             type: boolean
 *            CLI_VMIRRF:
 *              summary: Valor minimo IRRF?
 *              type: boolean
 *            CLI_FOMEZERO:
 *              summary: Participação Fome Zero?
 *              type: boolean
 *            CLI_SIMPLES:
 *              summary: Participação Simples Nacional?
 *              type: boolean
 *            CLI_TPJ:
 *              summary: 1 - ME - Micro Empresa, 2 - EPP - Empresa de Pequeno Porte,3 - MEI - Microempreendedor Individual,4 - Não Optante (Tipo de Pessoa Juridica?)
 *              type: string
 *            CLI_CTRANSPORTADORA:
 *              summary: Código da Transportadora Padrão
 *              type: integer
 *            CLI_FPAGAMENTO:
 *              summary: Tabela de Pagamento Padrão
 *              type: integer
 *            CLI_TABELA:
 *              summary: Código da Tabela de Preços
 *              type: integer
 *            CLI_DESCONTO:
 *              summary: Porcentagem de Desconto Padrão
 *              type: number
 *            CLI_SENHA:
 *              summary: Senha de acesso para outros sistemas
 *              type: string
 *            CLI_OBS:
 *              summary: Campo para Observação
 *              type: string
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.put(
    "/clientes/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.atualiza
);
/**
 * @openapi
 * /clientes/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta o cadastro de um Cliente
 *    tags: [Clientes]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Cliente.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.delete(
    "/clientes/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.apaga
);

/**
 * @openapi
 * /clientes/busca:
 *  post:
 *    summary: Busca
 *    description: Realiza uma busca no Banco de Dados
 *    tags: [Clientes]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            busca:
 *              summary: string para busca
 *              type: string
 *              example: "CON"
 *            inicio:
 *              summary: inicio do index da paginação
 *              type: integer
 *              example: 0
 *            limit:
 *              summary: limite de registros da paginação
 *              type: integer
 *              example: 10
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
    "/clientes/busca",
    JWTController.Verifica,
    Controller.buscaRegistroCount
);

module.exports = router;