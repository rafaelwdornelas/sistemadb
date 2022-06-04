const { Router } = require("express");
const Controller = require("../controllers/TelefonesController");
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
 *   name: Telefones
 *   description: Manipulação de Telefones
 */

/**
 * @openapi
 * /telefones/todos/{id}:
 *  get:
 *    summary: Todos
 *    description: Pega todos telefones de um Cliente utilizando o código do Cliente na busca
 *    tags: [Telefones]
 *    parameters:
 *      - name: id
 *        description: Informe cógido do cliente.
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
router.get("/telefones/todos/:id", authenticateJWT, Controller.pegaTodos);

/**
 * @openapi
 * /telefones/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os telefones apagados
 *    tags: [Telefones]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/telefones/apagados", authenticateJWT, Controller.pegaApagados);

/**
 * @openapi
 * /telefones/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um telefone apagado
 *    tags: [Telefones]
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
router.get("/telefones/apagados/:id", authenticateJWT, Controller.pegaApagado);
/**
 * @openapi
 * /telefones/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um telefone pelo ID
 *    tags: [Telefones]
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
router.get("/telefones/:id", authenticateJWT, Controller.pega);

/**
 * @openapi
 * /telefones/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo telefone
 *    tags: [Telefones]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            TEL_CLI:
 *              summary: Código do Cliente
 *              type: integer
 *            TEL_TIPO:
 *              summary: 1-Fixo 2-Celular
 *              type: integer
 *            TEL_DDD:
 *              summary: DDD
 *              type: string
 *            TEL_NUMERO:
 *              summary: Número
 *              type: string
 *            TEL_RAMAL:
 *              summary: Ramal
 *              type: string
 *            TEL_CONTATO:
 *              summary: Contato
 *              type: string
 *            TEL_OBS:
 *              summary: Observação
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
router.post("/telefones/novo", authenticateJWT, Controller.cria);
/**
 * @openapi
 * /telefones/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma telefone deletado
 *    tags: [Telefones]
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
router.post("/telefones/:id/restaura", authenticateJWT, Controller.restaura);
/**
 * @openapi
 * /telefones/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um telefone
 *    tags: [Telefones]
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
 *            TEL_CLI:
 *              summary: Código do Cliente
 *              type: integer
 *            TEL_TIPO:
 *              summary: 1-Fixo 2-Celular
 *              type: integer
 *            TEL_DDD:
 *              summary: DDD
 *              type: string
 *            TEL_NUMERO:
 *              summary: Número
 *              type: string
 *            TEL_RAMAL:
 *              summary: Ramal
 *              type: string
 *            TEL_CONTATO:
 *              summary: Contato
 *              type: string
 *            TEL_OBS:
 *              summary: Observação
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
router.put("/telefones/:id", authenticateJWT, Controller.atualiza);
/**
 * @openapi
 * /telefones/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um telefone
 *    tags: [Telefones]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da Telefone.
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
router.delete("/telefones/:id", authenticateJWT, Controller.apaga);

module.exports = router;