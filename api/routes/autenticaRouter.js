const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET || "secret";
const secret2 = process.env.JWT_REFRESH_TOKEN_SECRET || "secret";
const usuariosController = require("../controllers/usuariosController");
const { globais } = require("../modules");
const moduloglobais = new globais();
/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Processos de Autenticação
 */

/**
 * @openapi
 * /login:
 *  post:
 *    summary: Login
 *    description: Autenticação de Usuário
 *    tags: [Autenticação]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            USERNAME:
 *              description: Nome de usuário
 *              type: string
 *            SENHA:
 *              description: Senha do usuário
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
 */
router.post("/login", async (req, res) => {
  const user = req.body.USERNAME;
  const senha = req.body.SENHA;

  if (user == "admin" && senha == "admin") {
    // generate an access token
    const accessToken = jwt.sign({ username: user, role: ["admin"] }, secret, {
      expiresIn: "7d",
    });

    const refreshToken = jwt.sign(
      {
        username: user,
        role: ["admin"],
        dados: {
          id: 0,
          USERNAME: "admin",
          SENHA: "admin",
          COD_FUNCIONARIO: 1,
          ROLE_ID: 1,
        },
      },
      secret2,
      {
        expiresIn: "1y",
      }
    );
    res.json({
      accessToken,
      refreshToken,
    });
  } else {
    const retorno = await usuariosController.login(user, senha);
    let tempretorno = JSON.stringify(retorno);
    //console.log(retorno);
    if (tempretorno.indexOf("USERNAME") > -1) {
      // generate an access token
      const accessToken = jwt.sign(
        { username: user, role: "user", dados: retorno },
        secret,
        {
          expiresIn: "7d",
        }
      );
      const refreshToken = jwt.sign(
        { username: user, role: "user", dados: retorno },
        secret2,
        {
          expiresIn: "1y",
        }
      );
      //console.log(retorno.id);
      await usuariosController.atualizarRefreshToken(retorno.id, refreshToken);

      res.json({
        accessToken,
        refreshToken,
      });
    } else {
      res.status(401).json({
        error: "Usuário ou senha inválidos",
      });
    }
  }
});

/**
 * @openapi
 * /login/auth/me:
 *  get:
 *    summary: Informações do usuário
 *    description: Carrega informação do usuário logado
 *    tags: [Autenticação]
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
 */
router.get("/login/auth/me", async (req, res) => {
  const authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    try {
      let decoded;
      try {
        decoded = await jwt.verify(token, secret);
        console.log("decoded", decoded);
        const usuario = decoded.dados.id;
        const retornousuario = await usuariosController.pegaid(usuario);
        let tempretorno = JSON.stringify(retornousuario);
        tempretorno = JSON.parse(tempretorno);
        console.log("resultado", tempretorno);
        tempretorno.row.role = "admin";
        res.json(tempretorno);
      } catch (error) {
        moduloglobais.log("/login/auth/me ERROR1: " + error.message, "error");
        return res.status(401).json({ error: error.message });
      }
    } catch (error) {
      moduloglobais.log("/login/auth/me ERROR2: " + error.message, "error");
      res.sendStatus(401).json({ error: error.message });
    }
  } else {
    res.sendStatus(401);
  }
});

/**
 * @openapi
 * /login/auth/refresh:
 *  get:
 *    summary: Atualiza Token
 *    description: Atualizar token de acesso utilizando o refresh token
 *    tags: [Autenticação]
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
 */
router.get("/login/auth/refresh", async (req, res) => {
  const authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    try {
      let decoded;
      try {
        decoded = await jwt.verify(token, secret2);
        console.log("decoded", decoded);
        const usuario = decoded.dados.id;
        // generate an access token
        const accessToken = jwt.sign(
          {
            username: decoded.username,
            role: decoded.role,
            dados: decoded.dados,
          },
          secret,
          {
            expiresIn: "7d",
          }
        );
        const refreshToken = jwt.sign(
          {
            username: decoded.username,
            role: decoded.role,
            dados: decoded.dados,
          },
          secret2,
          {
            expiresIn: "1y",
          }
        );
        //console.log(retorno.id);
        await usuariosController.atualizarRefreshToken(usuario, refreshToken);

        res.json({
          accessToken,
          refreshToken,
        });
      } catch (error) {
        moduloglobais.log(
          "/login/auth/refresh ERROR1: " + error.message,
          "error"
        );
        return res.status(401).json({ error: error.message });
      }
    } catch (error) {
      moduloglobais.log(
        "/login/auth/refresh ERROR2: " + error.message,
        "error"
      );
      res.sendStatus(401).json({ error: error.message });
    }
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
