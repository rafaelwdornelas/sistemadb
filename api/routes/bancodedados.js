const { Router } = require("express");
const JWTController = require("../controllers/JWTController");
const router = Router();
const { sequelizemagager, globais } = require("../modules/");
const dbmanager = new sequelizemagager();
const moduloglobais = new globais();

/**
 * @swagger
 * tags:
 *   name: Banco de Dados
 *   description: Manipulação do banco de dados
 */

/**
 * @openapi
 * /bancodedados/create:
 *  get:
 *    summary: Criar database
 *    description: Cria o banco de dados conforme configuração enviroment
 *    tags: [Banco de Dados]
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
router.get("/bancodedados/create", JWTController.Verifica, async (req, res) => {
  console.log("JWT Dados:", req.jwtdados);
  try {
    if (req.jwtdados.role != "admin") {
      return res.status(401).json({
        sucesso: false,
        mensagem: "Acesso apenas para administradores",
      });
    }
    let retorno = await dbmanager.createdatabase();
    console.log(retorno);
    moduloglobais.log("API: dbmanager.createdatabase", "info");
    return res.status(200).json({
      sucesso: true,
      mensagem: retorno,
    });
  } catch (error) {
    let retorno = {
      sucesso: false,
      msg: error.message,
    };
    moduloglobais.log(
      "API: dbmanager.createdatabase ERROR: " + error.message,
      "error"
    );
    return res.status(500).json(retorno);
  }
});

/**
 * @openapi
 * /bancodedados/delete:
 *  get:
 *    summary: Apaga database
 *    description: Apaga o banco de dados atual
 *    tags: [Banco de Dados]
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
router.get("/bancodedados/delete", JWTController.Verifica, async (req, res) => {
  console.log("JWT Dados:", req.jwtdados);
  try {
    if (req.jwtdados.role != "admin") {
      return res.status(401).json({
        sucesso: false,
        mensagem: "Acesso apenas para administradores",
      });
    }
    let retorno = await dbmanager.dropdatabase();
    console.log(retorno);
    moduloglobais.log("API: dbmanager.dropdatabase", "info");
    return res.status(200).json({
      sucesso: true,
      mensagem: retorno,
    });
  } catch (error) {
    let retorno = {
      sucesso: false,
      msg: error.message,
    };
    moduloglobais.log(
      "API: dbmanager.dropdatabase ERROR: " + error.message,
      "error"
    );
    return res.status(500).json(retorno);
  }
});

/**
 * @openapi
 * /bancodedados/createtables:
 *  get:
 *    summary: Cria Tabelas
 *    description: Cria as tabelas do banco de dados ou atualiza as tabelas para a nova versão
 *    tags: [Banco de Dados]
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
  "/bancodedados/createtables",
  JWTController.Verifica,
  async (req, res) => {
    console.log("JWT Dados:", req.jwtdados);
    try {
      if (req.jwtdados.role != "admin") {
        return res.status(401).json({
          sucesso: false,
          mensagem: "Acesso apenas para administradores",
        });
      }
      let retorno = await dbmanager.createtables();
      console.log(retorno);
      moduloglobais.log("API: dbmanager.createtables", "info");
      return res.status(200).json({
        sucesso: true,
        mensagem: retorno,
      });
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: dbmanager.createtables ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
);

/**
 * @openapi
 * /bancodedados/atualizaseeds:
 *  get:
 *    summary: Alimenta Tabelas
 *    description: Carrega os dados iniciais das tabelas do banco de dados
 *    tags: [Banco de Dados]
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
  "/bancodedados/atualizaseeds",
  JWTController.Verifica,
  async (req, res) => {
    console.log("JWT Dados:", req.jwtdados);
    try {
      if (req.jwtdados.role != "admin") {
        return res.status(401).json({
          sucesso: false,
          mensagem: "Acesso apenas para administradores",
        });
      }
      let retorno = await dbmanager.seedinicial();
      console.log(retorno);
      moduloglobais.log("API: dbmanager.seedinicial", "info");
      return res.status(200).json({
        sucesso: true,
        mensagem: retorno,
      });
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: dbmanager.seedinicial ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
);

/**
 * @openapi
 * /bancodedados/listaseeds:
 *  get:
 *    summary: Lista Seeds
 *    description: Lista toda a pasta de seeds
 *    tags: [Banco de Dados]
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
  "/bancodedados/listaseeds",
  JWTController.Verifica,
  async (req, res) => {
    console.log("JWT Dados:", req.jwtdados);
    try {
      if (req.jwtdados.role != "admin") {
        return res.status(401).json({
          sucesso: false,
          mensagem: "Acesso apenas para administradores",
        });
      }
      let retorno = await dbmanager.seedlist();
      console.log(retorno);
      moduloglobais.log("API: dbmanager.seedlist", "info");
      return res.status(200).json({
        sucesso: true,
        mensagem: retorno,
      });
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: dbmanager.seedlist ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
);

module.exports = router;
