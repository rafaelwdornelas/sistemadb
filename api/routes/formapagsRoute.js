const { Router } = require("express");
const Controller = require("../controllers/FormapagsController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Forma Pagamentos
 *   description: Manipulação de Endereços
 */

/**
 * @openapi
 * /formapags:
 *  get:
 *    summary: Todos
 *    description: Pega todos endereços de um Cliente utilizando o código do Cliente na busca
 *    tags: [Forma Pagamentos]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/formapags", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /formapags/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um endereço pelo ID
 *    tags: [Forma Pagamentos]
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
router.get("/formapags/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /formapags/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo endereço
 *    tags: [Forma Pagamentos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            PAG_NOME:
 *              summary: Nome da Forma de Pagamento
 *              type: string
 *            PAG_ATIVO:
 *              summary: true - Ativo , false - Inativo
 *              type: boolean
 *            PAG_TIPO:
 *              summary: 1 - Boleto , 2 - Cartão de Crédito , 3 - Cartão de Débito , 4 - Dinheiro
 *              type: string
 *            PAG_FDIAS:
 *              summary: Formula de dias de vencimento
 *              type: string
 *            PAG_FPORCENTAGEM:
 *              summary: Formula porcentagem do valor total do pedido
 *              type: string
 *            PAG_DESCONTO:
 *              summary: Desconto em porcentagem do valor total
 *              type: float
 *            PAG_ACRESSIMO:
 *              summary: Acréscimo em porcentagem do valor total
 *              type: float
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
    "/formapags/novo",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.cria
);
/**
 * @openapi
 * /formapags/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um endereço
 *    tags: [Forma Pagamentos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Família.
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
 *            PAG_NOME:
 *              summary: Nome da Forma de Pagamento
 *              type: string
 *            PAG_ATIVO:
 *              summary: true - Ativo , false - Inativo
 *              type: boolean
 *            PAG_TIPO:
 *              summary: 1 - Boleto , 2 - Cartão de Crédito , 3 - Cartão de Débito , 4 - Dinheiro
 *              type: string
 *            PAG_FDIAS:
 *              summary: Formula de dias de vencimento
 *              type: string
 *            PAG_FPORCENTAGEM:
 *              summary: Formula porcentagem do valor total do pedido
 *              type: string
 *            PAG_DESCONTO:
 *              summary: Desconto em porcentagem do valor total
 *              type: float
 *            PAG_ACRESSIMO:
 *              summary: Acréscimo em porcentagem do valor total
 *              type: float
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
    "/formapags/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.atualiza
);
/**
 * @openapi
 * /formapags/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um endereço
 *    tags: [Forma Pagamentos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da Família.
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
    "/formapags/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.apaga
);

module.exports = router;