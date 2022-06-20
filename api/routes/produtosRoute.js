const { Router } = require("express");
const Controller = require("../controllers/produtosController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Manipulação de Produtos
 */

/**
 * @openapi
 * /produtos:
 *  post:
 *    summary: Todos
 *    description: Pega todos Produtos
 *    tags: [Produtos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            inicio:
 *              description: inicio do index da paginação
 *              type: integer
 *              example: 0
 *            limit:
 *              description: limite de registros da paginação
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
router.post("/produtos", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /produtos/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos produtos apagadas
 *    tags: [Produtos]
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
  "/produtos/apagados",
  JWTController.Verifica,
  Controller.pegaApagados
);

/**
 * @openapi
 * /produtos/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um armazem de produto apagado
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/produtos/apagados/:id",
  JWTController.Verifica,
  Controller.pegaApagado
);
/**
 * @openapi
 * /produtos/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um armazem de produto pelo ID
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
router.get("/produtos/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /produtos/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo armazem de produto
 *    tags: [Produtos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            COD:
 *              description: Código do produto
 *              type: string
 *            ATIVO:
 *              description: Ativo?
 *              type: boolean
 *            FORMULADO:
 *              description:  Formulado?
 *              type: boolean
 *            DESCRICAO:
 *              description: Descrição
 *              type: string
 *            FAMILIA:
 *              description: Família
 *              type: integer
 *            UND:
 *              description: Unidade
 *              type: string
 *            COD_BARRAS:
 *              description: Código de barras
 *              type: string
 *            NCM:
 *              description: NCM
 *              type: string
 *            PRECO_VENDA:
 *              description: Preço de venda
 *              type: number
 *            PRECO_CUSTO:
 *              description: Preço de custo
 *              type: number
 *            PRECO_PORCENTAGEM:
 *              description: Porcentagem de lucro
 *              type: number
 *            COMISSAO:
 *              description: Comissão
 *              type: number
 *            FORNECEDOR:
 *              description: Fornecedor padrão
 *              type: integer
 *            MARCA:
 *              description: Marca
 *              type: string
 *            ALIQ_ICMS:
 *              description: Alíquota ICMS
 *              type: number
 *            ALIQ_IPI:
 *              description: Alíquota IPI
 *              type: number
 *            ALIQ_ISS:
 *              description: Alíquota ISS
 *              type: number
 *            ALIQ_FECP:
 *              description: Alíquota FECP
 *              type: number
 *            REDUCAO_INSS:
 *              description: Redução INSS
 *              type: number
 *            REDUCAO_IRRF:
 *              description: Redução IRRF
 *              type: number
 *            REDUCAO_PIS:
 *              description: Redução PIS
 *              type: number
 *            REDUCAO_COFINS:
 *              description: Redução COFINS
 *              type: number
 *            PERC_CSLL:
 *              description: Perc. CSLL
 *              type: number
 *            PERC_COFINS:
 *              description: Perc. COFINS
 *              type: number
 *            PERC_PIS:
 *              description: Perc. PIS
 *              type: number
 *            CNAE:
 *              description: Código CNAE
 *              type: string
 *            PESSO_BRUTO:
 *              description: Pesso bruto
 *              type: number
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
  "/produtos/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.cria
);
/**
 * @openapi
 * /produtos/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de um armazem de produto apagado
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/produtos/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.restaura
);
/**
 * @openapi
 * /produtos/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um armazem de produto
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
 *            COD:
 *              description: Código do produto
 *              type: string
 *            ATIVO:
 *              description: Ativo?
 *              type: boolean
 *            FORMULADO:
 *              description:  Formulado?
 *              type: boolean
 *            DESCRICAO:
 *              description: Descrição
 *              type: string
 *            FAMILIA:
 *              description: Família
 *              type: integer
 *            UND:
 *              description: Unidade
 *              type: string
 *            COD_BARRAS:
 *              description: Código de barras
 *              type: string
 *            NCM:
 *              description: NCM
 *              type: string
 *            PRECO_VENDA:
 *              description: Preço de venda
 *              type: number
 *            PRECO_CUSTO:
 *              description: Preço de custo
 *              type: number
 *            PRECO_PORCENTAGEM:
 *              description: Porcentagem de lucro
 *              type: number
 *            COMISSAO:
 *              description: Comissão
 *              type: number
 *            FORNECEDOR:
 *              description: Fornecedor padrão
 *              type: integer
 *            MARCA:
 *              description: Marca
 *              type: string
 *            ALIQ_ICMS:
 *              description: Alíquota ICMS
 *              type: number
 *            ALIQ_IPI:
 *              description: Alíquota IPI
 *              type: number
 *            ALIQ_ISS:
 *              description: Alíquota ISS
 *              type: number
 *            ALIQ_FECP:
 *              description: Alíquota FECP
 *              type: number
 *            REDUCAO_INSS:
 *              description: Redução INSS
 *              type: number
 *            REDUCAO_IRRF:
 *              description: Redução IRRF
 *              type: number
 *            REDUCAO_PIS:
 *              description: Redução PIS
 *              type: number
 *            REDUCAO_COFINS:
 *              description: Redução COFINS
 *              type: number
 *            PERC_CSLL:
 *              description: Perc. CSLL
 *              type: number
 *            PERC_COFINS:
 *              description: Perc. COFINS
 *              type: number
 *            PERC_PIS:
 *              description: Perc. PIS
 *              type: number
 *            CNAE:
 *              description: Código CNAE
 *              type: string
 *            PESSO_BRUTO:
 *              description: Pesso bruto
 *              type: number
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
  "/produtos/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.atualiza
);
/**
 * @openapi
 * /produtos/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um armazem de produto
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/produtos/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
