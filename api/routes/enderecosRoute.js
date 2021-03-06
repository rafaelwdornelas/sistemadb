const { Router } = require("express");
const Controller = require("../controllers/EnderecosController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

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
 *        description: Informe cógigo do cliente.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *
 */
router.get(
  "/enderecos/todos/:id",
  JWTController.Verifica,
  helper.checkPermission("clientes_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /enderecos/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os endereços apagados
 *    tags: [Endereços]
 *    responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *
 */
router.get(
  "/enderecos/apagados",
  JWTController.Verifica,
  helper.checkPermission("clientes_visualizar"),
  Controller.pegaApagados
);

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
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *
 */
router.get(
  "/enderecos/apagados/:id",
  JWTController.Verifica,
  helper.checkPermission("clientes_visualizar"),
  Controller.pegaApagado
);
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
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *
 */
router.get(
  "/enderecos/:id",
  JWTController.Verifica,
  helper.checkPermission("clientes_visualizar"),
  Controller.pega
);

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
 *              description: Código do Cliente
 *              type: integer
 *            END_TIPO:
 *              description: 1 - Principal , 2 - Cobrança , 3 - Entrega
 *              type: integer
 *            END_CEP:
 *              description: CEP 10 digitos
 *              type: string
 *            END_RUA:
 *              description: Rua
 *              type: string
 *            END_NUMERO:
 *              description: Numero
 *              type: integer
 *            END_BAIRRO:
 *              description: Bairro
 *              type: string
 *            END_EST:
 *              description: Estado (UF)
 *              type: string
 *            END_MUNICIPIO:
 *              description: Município
 *              type: string
 *            END_COMP:
 *              description: Complemento
 *              type: string
 *            END_CODMUN:
 *              description: Código do Município (IBGE)
 *              type: string
 *            END_REFERENCIA:
 *              description: Ponto de Referência
 *              type: string
 *            END_REGIAO:
 *              description: código da região do cliente
 *              type: string
 *            END_CPAIS:
 *              description: Código do País
 *              type: string
 *            END_NCPAIS:
 *              description: Nome do País
 *              type: string
 *    responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *
 */
router.post(
  "/enderecos/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("clientes_criar"),
  Controller.cria
);
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
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *
 */
router.post(
  "/enderecos/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("clientes_alterar"),
  Controller.restaura
);
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
 *              description: Código do Cliente
 *              type: integer
 *            END_TIPO:
 *              description: 1 - Principal , 2 - Cobrança , 3 - Entrega
 *              type: integer
 *            END_CEP:
 *              description: CEP 10 digitos
 *              type: string
 *            END_RUA:
 *              description: Rua
 *              type: string
 *            END_NUMERO:
 *              description: Numero
 *              type: integer
 *            END_BAIRRO:
 *              description: Bairro
 *              type: string
 *            END_EST:
 *              description: Estado (UF)
 *              type: string
 *            END_MUNICIPIO:
 *              description: Município
 *              type: string
 *            END_COMP:
 *              description: Complemento
 *              type: string
 *            END_CODMUN:
 *              description: Código do Município (IBGE)
 *              type: string
 *            END_REFERENCIA:
 *              description: Ponto de Referência
 *              type: string
 *            END_REGIAO:
 *              description: código da região do cliente
 *              type: string
 *            END_CPAIS:
 *              description: Código do País
 *              type: string
 *            END_NCPAIS:
 *              description: Nome do País
 *              type: string
 *    responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *
 */
router.put(
  "/enderecos/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("clientes_alterar"),
  Controller.atualiza
);
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
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *
 */
router.delete(
  "/enderecos/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("clientes_apagar"),
  Controller.apaga
);

module.exports = router;
