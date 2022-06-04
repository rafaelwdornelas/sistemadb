const { Router } = require("express");
const Controller = require("../controllers/EnderecosController");
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
 *   name: Endereços
 *   description: Manipulação de Endereços
 */

/**
 * @openapi
 * /enderecos/todos/{id}:
 *  get:
 *    summary: Todos
 *    description: Pega todos endereços de um Cliente utilizando o código do Cliente na busca
 *    tags: [Endereços]
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
router.get("/enderecos/todos/:id", authenticateJWT, Controller.pegaTodos);

/**
 * @openapi
 * /enderecos/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os endereços apagados
 *    tags: [Endereços]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/enderecos/apagados", authenticateJWT, Controller.pegaApagados);

/**
 * @openapi
 * /enderecos/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um endereço apagado
 *    tags: [Endereços]
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
router.get("/enderecos/apagados/:id", authenticateJWT, Controller.pegaApagado);
/**
 * @openapi
 * /enderecos/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um endereço pelo ID
 *    tags: [Endereços]
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
router.get("/enderecos/:id", authenticateJWT, Controller.pega);

/**
 * @openapi
 * /enderecos/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo endereço
 *    tags: [Endereços]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            END_CLI:
 *              summary: Código do Cliente
 *              type: integer
 *            END_TIPO:
 *              summary: 1 - Principal , 2 - Cobrança , 3 - Entrega
 *              type: integer
 *            END_CEP:
 *              summary: CEP 10 digitos
 *              type: string
 *            END_RUA:
 *              summary: Rua
 *              type: string
 *            END_NUMERO:
 *              summary: Numero
 *              type: integer
 *            END_BAIRRO:
 *              summary: Bairro
 *              type: string
 *            END_EST:
 *              summary: Estado (UF)
 *              type: string
 *            END_MUNICIPIO:
 *              summary: Município
 *              type: string
 *            END_COMP:
 *              summary: Complemento
 *              type: string
 *            END_CODMUN:
 *              summary: Código do Município (IBGE)
 *              type: string
 *            END_REFERENCIA:
 *              summary: Ponto de Referência
 *              type: string
 *            END_REGIAO:
 *              summary: código da região do cliente
 *              type: string
 *            END_CPAIS:
 *              summary: Código do País
 *              type: string
 *            END_NCPAIS:
 *              summary: Nome do País
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
router.post("/enderecos/novo", authenticateJWT, Controller.cria);
/**
 * @openapi
 * /enderecos/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [Endereços]
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
router.post("/enderecos/:id/restaura", authenticateJWT, Controller.restaura);
/**
 * @openapi
 * /enderecos/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um endereço
 *    tags: [Endereços]
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
 *            END_CLI:
 *              summary: Código do Cliente
 *              type: integer
 *            END_TIPO:
 *              summary: 1 - Principal , 2 - Cobrança , 3 - Entrega
 *              type: integer
 *            END_CEP:
 *              summary: CEP 10 digitos
 *              type: string
 *            END_RUA:
 *              summary: Rua
 *              type: string
 *            END_NUMERO:
 *              summary: Numero
 *              type: integer
 *            END_BAIRRO:
 *              summary: Bairro
 *              type: string
 *            END_EST:
 *              summary: Estado (UF)
 *              type: string
 *            END_MUNICIPIO:
 *              summary: Município
 *              type: string
 *            END_COMP:
 *              summary: Complemento
 *              type: string
 *            END_CODMUN:
 *              summary: Código do Município (IBGE)
 *              type: string
 *            END_REFERENCIA:
 *              summary: Ponto de Referência
 *              type: string
 *            END_REGIAO:
 *              summary: código da região do cliente
 *              type: string
 *            END_CPAIS:
 *              summary: Código do País
 *              type: string
 *            END_NCPAIS:
 *              summary: Nome do País
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
router.put("/enderecos/:id", authenticateJWT, Controller.atualiza);
/**
 * @openapi
 * /enderecos/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um endereço
 *    tags: [Endereços]
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
router.delete("/enderecos/:id", authenticateJWT, Controller.apaga);

module.exports = router;