const { Router } = require("express");
const Controller = require("../controllers/FuncionarioCargoController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Funcionario Cargos
 *   description: Manipulação de Grupo de Funcionários
 */

/**
 * @openapi
 * /funcionariocargos:
 *  get:
 *    summary: Todos
 *    description: Pega todos cargos de Funcionarios
 *    tags: [Funcionario Cargos]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/funcionariocargos", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /funcionariocargos/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os cargos apagados
 *    tags: [Funcionario Cargos]
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
  "/funcionariocargos/apagados",
  JWTController.Verifica,
  Controller.pegaApagados
);

/**
 * @openapi
 * /funcionariocargos/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um cargo apagado
 *    tags: [Funcionario Cargos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        example: 1
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
  "/funcionariocargos/apagados/:id",
  JWTController.Verifica,
  Controller.pegaApagado
);
/**
 * @openapi
 * /funcionariocargos/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um cargo pelo ID
 *    tags: [Funcionario Cargos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        example: 1
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
router.get("/funcionariocargos/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /funcionariocargos/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo cargo
 *    tags: [Funcionario Cargos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            FUNCG_NOME:
 *              description: Nome do Cargo
 *              type: string
 *            FUNCG_GRUPO:
 *              description: id do Grupo de Funcionários
 *              type: integer
 *            FUNCG_SALARIO:
 *              description: salario do Cargo padrão
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
  "/funcionariocargos/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.cria
);
/**
 * @openapi
 * /funcionariocargos/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de em cargo Deletado
 *    tags: [Funcionario Cargos]
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
  "/funcionariocargos/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.restaura
);
/**
 * @openapi
 * /funcionariocargos/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um cargo
 *    tags: [Funcionario Cargos]
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
 *            FUNCG_NOME:
 *              description: Nome do Cargo
 *              type: string
 *            FUNCG_GRUPO:
 *              description: id do Grupo de Funcionários
 *              type: integer
 *            FUNCG_SALARIO:
 *              description: salario do Cargo
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
  "/funcionariocargos/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.atualiza
);
/**
 * @openapi
 * /funcionariocargos/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um cargo
 *    tags: [Funcionario Cargos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do cargo.
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
  "/funcionariocargos/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
