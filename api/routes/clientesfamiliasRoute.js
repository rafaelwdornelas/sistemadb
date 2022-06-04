const { Router } = require("express");
const Controller = require("../controllers/ClientesFamiliasController");
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
    const url = req.get("host");
    const authHeader = req.headers.authorization;
    if (url === "localhost:37778") {
        next();
    } else if (authHeader) {
        const token = authHeader.split(" ")[1];

        // eslint-disable-next-line no-unused-vars
        jwt.verify(token, "P2ssw0rdxinf3ctxz", authenticateJWT, (err, user) => {
            if (err) {
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
 *   name: CliFamilias
 *   description: Manipulação das Familias de Clientes
 */

/**
 * @openapi
 * /clifamilias:
 *  get:
 *    summary: Todos
 *    description: Pega todos os Familias com Paginação
 *    tags: [CliFamilias]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/clifamilias", authenticateJWT, Controller.pegaTodos);

/**
 * @openapi
 * /clifamilias/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todas as Familias Apagadas
 *    tags: [CliFamilias]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/clifamilias/apagados", authenticateJWT, Controller.pegaApagados);

/**
 * @openapi
 * /clifamilias/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Retorna uma Familia Apagada
 *    tags: [CliFamilias]
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
    "/clifamilias/apagados/:id",
    authenticateJWT,
    Controller.pegaApagado
);
/**
 * @openapi
 * /clifamilias/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Visualiza os Dados de uma Família
 *    tags: [CliFamilias]
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
router.get("/clifamilias/:id", authenticateJWT, Controller.pega);

/**
 * @openapi
 * /clifamilias/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um Família no Banco de Dados
 *    tags: [CliFamilias]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            NOME:
 *              summary: Nome da Família
 *              type: string
 *            DESCONTO:
 *              summary: Percentual de Desconto
 *              type: string
 *            RESTRITO:
 *              summary: Família Restrita para Moviventação?
 *              type: boolean
 *              example: false
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post("/clifamilias/novo", authenticateJWT, Controller.cria);
/**
 * @openapi
 * /clifamilias/{id}/restaura:
 *  post:
 *    summary: Restaura deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [CliFamilias]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Família
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
router.post("/clifamilias/:id/restaura", authenticateJWT, Controller.restaura);
/**
 * @openapi
 * /clifamilias/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera os Dados de uma Família no Banco de Dados
 *    tags: [CliFamilias]
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
 *            NOME:
 *              summary: Nome da Família
 *              type: string
 *            DESCONTO:
 *              summary: Percentual de Desconto
 *              type: string
 *            RESTRITO:
 *              summary: Família Restrita para Moviventação?
 *              type: boolean
 *              example: false
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.put("/clifamilias/:id", authenticateJWT, Controller.atualiza);
/**
 * @openapi
 * /clifamilias/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta o cadastro de uma Família
 *    tags: [CliFamilias]
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
router.delete("/clifamilias/:id", authenticateJWT, Controller.apaga);

/**
 * @openapi
 * /clifamilias/busca:
 *  post:
 *    summary: Busca
 *    description: Realiza uma busca no Banco de Dados
 *    tags: [CliFamilias]
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
 *              example: "GER"
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
    "/clifamilias/busca",
    authenticateJWT,
    Controller.buscaRegistroCount
);

module.exports = router;