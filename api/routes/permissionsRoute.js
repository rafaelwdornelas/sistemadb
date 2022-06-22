/* eslint-disable no-unused-vars */
const { Router } = require("express");
const router = Router();
const Permission = require("../models").Permission;
const JWTController = require("../controllers/JWTController");

/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: Manipulação tabela de permissões de usuários
 */

/**
 * @openapi
 * /permissions:
 *  post:
 *    summary: Cadastra
 *    description: |
 *      Cadastra uma permissão de usuário no Banco de Dados
 *    tags: [Permissions]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            perm_name:
 *              description: Nome da Permissão
 *              type: string
 *              example: "tabela_visualizar"
 *            perm_description:
 *              description: Descrição da permissão
 *              type: string
 *              example: "Permite Visualizar a Tabela"
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
router.post("/permissions", JWTController.Verifica, function (req, res) {
  if (!req.body.perm_name || !req.body.perm_description) {
    res.status(400).send({
      msg: "Please pass permission name or description.",
    });
  } else {
    Permission.create({
      perm_name: req.body.perm_name,
      perm_description: req.body.perm_description,
    })
      .then((perm) => res.status(201).send(perm))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  }
});

/**
 * @openapi
 * /permissions:
 *  get:
 *    summary: Todos
 *    description: |
 *      Lista todas as permissions
 *    tags: [Permissions]
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
router.get("/permissions", JWTController.Verifica, function (req, res) {
  Permission.findAll()
    .then((perms) => res.status(200).send(perms))
    .catch((error) => {
      res.status(400).send(error);
    });
});

/**
 * @openapi
 * /permissions/{id}:
 *  put:
 *    summary: Altera
 *    description: |
 *      Altera uma permissão de usuário no Banco de Dados
 *    tags: [Permissions]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da permissão.
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
 *            perm_name:
 *              description: Nome da Permissão
 *              type: string
 *              example: "tabela_visualizar"
 *            perm_description:
 *              description: Descrição da permissão
 *              type: string
 *              example: "Permite Visualizar a Tabela"
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
router.put("/permissions/:id", JWTController.Verifica, function (req, res) {
  if (!req.params.id || !req.body.perm_name || !req.body.perm_description) {
    res.status(400).send({
      msg: "Please pass permission ID, name or description.",
    });
  } else {
    Permission.findByPk(req.params.id)
      .then((perm) => {
        Permission.update(
          {
            perm_name: req.body.perm_name || perm.perm_name,
            perm_description:
              req.body.perm_description || perm.perm_description,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        )
          .then((_) => {
            res.status(200).send({
              message: "permission updated",
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
 * /permissions/{id}:
 *  delete:
 *    summary: Deleta
 *    description: |
 *      Deleta o cadastro de uma permissão
 *    tags: [Permissions]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da permissão.
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
router.delete("/permissions/:id", JWTController.Verifica, function (req, res) {
  if (!req.params.id) {
    res.status(400).send({
      msg: "Please pass permission ID.",
    });
  } else {
    Permission.findByPk(req.params.id)
      .then((perm) => {
        if (perm) {
          perm
            .destroy({
              where: {
                id: req.params.id,
              },
            })
            .then((_) => {
              res.status(200).send({
                message: "permission deleted",
              });
            })
            .catch((err) => res.status(400).send(err));
        } else {
          res.status(404).send({
            message: "permission not found",
          });
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  }
});

module.exports = router;
