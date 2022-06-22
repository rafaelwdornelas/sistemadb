/* eslint-disable no-unused-vars */
const { Router } = require("express");
const router = Router();
const User = require("../models").User;
const Role = require("../models").Role;
const Permission = require("../models").Permission;
const JWTController = require("../controllers/JWTController");

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Manipulação tabela de roles de usuários
 */

/**
 * @openapi
 * /roles:
 *  post:
 *    summary: Cadastra
 *    description: |
 *      Cadastra uma roles de usuário no Banco de Dados
 *    tags: [Roles]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            role_name:
 *              description: Nome da Role
 *              type: string
 *              example: caixa
 *            role_description:
 *              description: Descrição da Role
 *              type: string
 *              example: Usuários do Caixa
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
router.post("/roles", JWTController.Verifica, function (req, res) {
  if (!req.body.role_name || !req.body.role_description) {
    res.status(400).send({
      msg: "Please pass Role name or description.",
    });
  } else {
    Role.create({
      role_name: req.body.role_name,
      role_description: req.body.role_description,
    })
      .then((role) => res.status(201).send(role))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  }
});

/**
 * @openapi
 * /roles:
 *  get:
 *    summary: Todos
 *    description: |
 *      Lista todas as roles
 *    tags: [Roles]
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
router.get("/roles", JWTController.Verifica, function (req, res) {
  Role.findAll({
    include: [
      {
        model: Permission,
        as: "permissions",
      },
    ],
  })
    .then((roles) => res.status(200).send(roles))
    .catch((error) => {
      res.status(400).send(error);
    });
});

/**
 * @openapi
 * /roles/{id}:
 *  get:
 *    summary: Visualiza
 *    description: |
 *      Visualiza o cadastro de uma role
 *    tags: [Roles]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da role.
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
router.get("/roles/:id", JWTController.Verifica, function (req, res) {
  Role.findByPk(req.params.id, {
    include: {
      model: Permission,
      as: "permissions",
    },
  })
    .then((roles) => res.status(200).send(roles))
    .catch((error) => {
      res.status(400).send(error);
    });
});

/**
 * @openapi
 * /roles/{id}:
 *  put:
 *    summary: Altera
 *    description: |
 *      Altera uma role de usuário no Banco de Dados
 *    tags: [Roles]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da role.
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
 *            role_name:
 *              description: Nome da Role
 *              type: string
 *              example: caixa
 *            role_description:
 *              description: Descrição da Role
 *              type: string
 *              example: Usuários do Caixa
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
router.put("/roles/:id", JWTController.Verifica, function (req, res) {
  if (!req.params.id || !req.body.role_name || !req.body.role_description) {
    res.status(400).send({
      msg: "Please pass Role ID, name or description.",
    });
  } else {
    Role.findByPk(req.params.id)
      .then((role) => {
        Role.update(
          {
            role_name: req.body.role_name || role.role_name,
            role_description:
              req.body.role_description || role.role_description,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        )
          .then((_) => {
            res.status(200).send({
              message: "Role updated",
            });
          })
          .catch((err) => res.status(400).send(err));
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  }
});

/**
 * @openapi
 * /roles/{id}:
 *  delete:
 *    summary: Deleta
 *    description: |
 *      Deleta o cadastro de uma role
 *    tags: [Roles]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da role.
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
router.delete("/roles/:id", JWTController.Verifica, function (req, res) {
  if (!req.params.id) {
    res.status(400).send({
      msg: "Please pass role ID.",
    });
  } else {
    Role.findByPk(req.params.id)
      .then((role) => {
        if (role) {
          Role.destroy({
            where: {
              id: req.params.id,
            },
          })
            .then((_) => {
              res.status(200).send({
                message: "Role deleted",
              });
            })
            .catch((err) => res.status(400).send(err));
        } else {
          res.status(404).send({
            message: "Role not found",
          });
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  }
});

/**
 * @openapi
 * /permissions/{id}:
 *  post:
 *    summary: Adiciona Permissões
 *    description: |
 *      Adiciona permissões a uma role
 *    tags: [Roles]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da role.
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
 *            permissions:
 *              description: Array com os ids das permissões
 *              type: array
 *              example: [1,2,3,4,5]
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
router.post("/permissions/:id", JWTController.Verifica, function (req, res) {
  if (!req.body.permissions) {
    res.status(400).send({
      msg: "Please pass permissions.",
    });
  } else {
    Role.findByPk(req.params.id)
      .then((role) => {
        req.body.permissions.forEach(function (item, index) {
          Permission.findByPk(item)
            .then(async (perm) => {
              await role.addPermissions(perm, {
                through: {
                  selfGranted: false,
                },
              });
            })
            .catch((error) => {
              res.status(400).send(error);
            });
        });
        res.status(200).send({
          message: "Permissions added",
        });
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  }
});

module.exports = router;
