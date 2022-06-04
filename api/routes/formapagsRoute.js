const { Router } = require("express");
const Controller = require("../controllers/FormapagsController");
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        // eslint-disable-next-line no-unused-vars
        jwt.verify(token, "P2ssw0rdxinf3ctxz", authenticateJWT, (err, user) => {
            if (err) {
                console.log(err.message);
                return res.status(403).json(err.message);
            }

            //req.user = user;   se quiser enviar o user para o controller
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

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
router.get("/formapags", authenticateJWT, Controller.pegaTodos);

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
router.get("/formapags/:id", authenticateJWT, Controller.pega);

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
 *              summary: Formula de dias de vencimento separe os dias por vírgula ex: 30,60
 *              type: string
 *            PAG_FPORCENTAGEM:
 *              summary: Formula porcentagem do valor total para cada dia do campo PAG_FDIAS ex: 50,50
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
router.post("/formapags/novo", authenticateJWT, Controller.cria);
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
 *              summary: Formula de dias de vencimento separe os dias por vírgula ex: 30,60
 *              type: string
 *            PAG_FPORCENTAGEM:
 *              summary: Formula porcentagem do valor total para cada dia do campo PAG_FDIAS ex: 50,50
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
router.put("/formapags/:id", authenticateJWT, Controller.atualiza);
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
router.delete("/formapags/:id", authenticateJWT, Controller.apaga);

module.exports = router;