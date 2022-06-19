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
 *  get:
 *    summary: Todos
 *    description: Pega todos Produtos
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
router.get("/produtos", JWTController.Verifica, Controller.pegaTodos);

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
 *              summary: Código do produto
 *              type: string
 *            ATIVO:
 *              summary: Ativo?
 *              type: boolean
 *            FORMULADO:
 *              summary:  Formulado?
 *              type: boolean
 *            DESCRICAO:
 *              summary: Descrição
 *              type: string
 *            FAMILIA:
 *              summary: Família
 *              type: integer
 *            UND:
 *              summary: Unidade
 *              type: string
 *            COD_BARRAS:
 *              summary: Código de barras
 *              type: string
 *            NCM:
 *              summary: NCM
 *              type: string
 *            PRECO_VENDA:
 *              summary: Preço de venda
 *              type: number
 *            PRECO_CUSTO:
 *              summary: Preço de custo
 *              type: number
 *            PRECO_PORCENTAGEM:
 *              summary: Porcentagem de lucro
 *              type: number
 *            COMISSAO:
 *              summary: Comissão
 *              type: number
 *            FORNECEDOR:
 *              summary: Fornecedor padrão
 *              type: integer
 *            MARCA:
 *              summary: Marca
 *              type: string
 *            ALIQ_ICMS:
 *              summary: Alíquota ICMS
 *              type: number
 *            ALIQ_IPI:
 *              summary: Alíquota IPI
 *              type: number
 *            ALIQ_ISS:
 *              summary: Alíquota ISS
 *              type: number
 *            ALIQ_FECP:
 *              summary: Alíquota FECP
 *              type: number
 *            REDUCAO_INSS:
 *              summary: Redução INSS
 *              type: number
 *            REDUCAO_IRRF:
 *              summary: Redução IRRF
 *              type: number
 *            REDUCAO_PIS:
 *              summary: Redução PIS
 *              type: number
 *            REDUCAO_COFINS:
 *              summary: Redução COFINS
 *              type: number
 *            PERC_CSLL:
 *              summary: Perc. CSLL
 *              type: number
 *            PERC_COFINS:
 *              summary: Perc. COFINS
 *              type: number
 *            PERC_PIS:
 *              summary: Perc. PIS
 *              type: number
 *            CNAE:
 *              summary: Código CNAE
 *              type: string
 *            PESSO_BRUTO:
 *              summary: Pesso bruto
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
 *              summary: Código do produto
 *              type: string
 *            ATIVO:
 *              summary: Ativo?
 *              type: boolean
 *            FORMULADO:
 *              summary:  Formulado?
 *              type: boolean
 *            DESCRICAO:
 *              summary: Descrição
 *              type: string
 *            FAMILIA:
 *              summary: Família
 *              type: integer
 *            UND:
 *              summary: Unidade
 *              type: string
 *            COD_BARRAS:
 *              summary: Código de barras
 *              type: string
 *            NCM:
 *              summary: NCM
 *              type: string
 *            PRECO_VENDA:
 *              summary: Preço de venda
 *              type: number
 *            PRECO_CUSTO:
 *              summary: Preço de custo
 *              type: number
 *            PRECO_PORCENTAGEM:
 *              summary: Porcentagem de lucro
 *              type: number
 *            COMISSAO:
 *              summary: Comissão
 *              type: number
 *            FORNECEDOR:
 *              summary: Fornecedor padrão
 *              type: integer
 *            MARCA:
 *              summary: Marca
 *              type: string
 *            ALIQ_ICMS:
 *              summary: Alíquota ICMS
 *              type: number
 *            ALIQ_IPI:
 *              summary: Alíquota IPI
 *              type: number
 *            ALIQ_ISS:
 *              summary: Alíquota ISS
 *              type: number
 *            ALIQ_FECP:
 *              summary: Alíquota FECP
 *              type: number
 *            REDUCAO_INSS:
 *              summary: Redução INSS
 *              type: number
 *            REDUCAO_IRRF:
 *              summary: Redução IRRF
 *              type: number
 *            REDUCAO_PIS:
 *              summary: Redução PIS
 *              type: number
 *            REDUCAO_COFINS:
 *              summary: Redução COFINS
 *              type: number
 *            PERC_CSLL:
 *              summary: Perc. CSLL
 *              type: number
 *            PERC_COFINS:
 *              summary: Perc. COFINS
 *              type: number
 *            PERC_PIS:
 *              summary: Perc. PIS
 *              type: number
 *            CNAE:
 *              summary: Código CNAE
 *              type: string
 *            PESSO_BRUTO:
 *              summary: Pesso bruto
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
