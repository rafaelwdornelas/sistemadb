const { Router } = require("express");
const Controller = require("../controllers/FuncionarioGruposController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Funcionario Grupos
 *   description: Manipulação de Grupo de Funcionários
 */

/**
 * @openapi
 * /funcionariogrupos:
 *  get:
 *    summary: Todos
 *    description: Pega todos grupos de Funcionarios
 *    tags: [Funcionario Grupos]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/funcionariogrupos", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /funcionariogrupos/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os endereços apagados
 *    tags: [Funcionario Grupos]
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
    "/funcionariogrupos/apagados",
    JWTController.Verifica,
    Controller.pegaApagados
);

/**
 * @openapi
 * /funcionariogrupos/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um endereço apagado
 *    tags: [Funcionario Grupos]
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
    "/funcionariogrupos/apagados/:id",
    JWTController.Verifica,
    Controller.pegaApagado
);
/**
 * @openapi
 * /funcionariogrupos/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um endereço pelo ID
 *    tags: [Funcionario Grupos]
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
router.get("/funcionariogrupos/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /funcionariogrupos/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo endereço
 *    tags: [Funcionario Grupos]
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
router.post(
    "/funcionariogrupos/novo",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.cria
);
/**
 * @openapi
 * /funcionariogrupos/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [Funcionario Grupos]
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
router.post(
    "/funcionariogrupos/:id/restaura",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.restaura
);
/**
 * @openapi
 * /funcionariogrupos/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um endereço
 *    tags: [Funcionario Grupos]
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
router.put(
    "/funcionariogrupos/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.atualiza
);
/**
 * @openapi
 * /funcionariogrupos/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um endereço
 *    tags: [Funcionario Grupos]
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
    "/funcionariogrupos/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.apaga
);

module.exports = router;