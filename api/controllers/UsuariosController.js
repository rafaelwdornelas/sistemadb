/* eslint-disable indent */
const { UsuariosServices } = require("../services");
const usuariosServices = new UsuariosServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class UsuariosController {
  static async login(user, senha) {
    try {
      const retorno = await usuariosServices.getLogin(user, senha);
      moduloglobais.log(
        "API: clientesServices.getLogin, ID:" + user + " senha:" + senha,
        "info"
      );
      return retorno;
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: clientesServices.getLogin ERROR: " + error.message,
        "error"
      );
      return retorno;
    }
  }
  static async atualizarRefreshToken(id, refreshToken) {
    try {
      const retorno = await usuariosServices.updatetoken(id, refreshToken);
      moduloglobais.log(
        "API: clientesServices.updatetoken, ID:" +
          id +
          " refreshToken:" +
          refreshToken,
        "info"
      );
      return retorno;
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: clientesServices.updatetoken: Error " + error.message,
        "error"
      );
      return retorno;
    }
  }
  static async pegaApagados(req, res) {
    try {
      const dados = await usuariosServices.listaRegistrosApagado();
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : dados.length,
        rows: dados,
      };
      moduloglobais.log("API: usuariosServices.listaRegistrosApagado", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.listaRegistrosApagado ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pegaApagado(req, res) {
    try {
      const { id } = req.params;
      const dados = await usuariosServices.consultaRegistroApagado(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: usuariosServices.consultaRegistroApagado, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.consultaRegistroApagado ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
  static async pegaTodos(req, res) {
    try {
      const retorno = {
        sucesso: true,
        ...(await usuariosServices.pegaTodosOsRegistrosPaginacao({
          offset: 0,
          limit: 1000,
        })),
      };
      moduloglobais.log(
        "API: usuariosServices.pegaTodosOsRegistrosPaginacao",
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.pegaTodosOsRegistrosPaginacao ERROR: " +
          error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pega(req, res) {
    try {
      const { id } = req.params;
      const dados = await usuariosServices.getUsuario(id);
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log("API: usuariosServices.getUsuario, ID: " + id, "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.getUsuario ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async pegaid(id) {
    try {
      const dados = await usuariosServices.pegaUmRegistro({ id });
      let retorno = {
        sucesso: true,
        count: dados == null ? 0 : 1,
        row: dados,
      };
      moduloglobais.log(
        "API: usuariosServices.pegaUmRegistro, ID: " + id,
        "info"
      );
      return retorno;
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.pegaUmRegistro ERROR: " + error.message,
        "error"
      );
      return retorno;
    }
  }

  static async cria(req, res) {
    const novoRegistro = req.body;
    try {
      const dados = await usuariosServices.criaRegistro(novoRegistro);
      let retorno = {
        sucesso: true,
        count: 1,
        row: dados,
      };
      moduloglobais.log("API: usuariosServices.pegaUmRegistro", "info");
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.criaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async atualiza(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await usuariosServices.atualizaRegistro(novasInfos, Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} atualizado`,
      };
      moduloglobais.log(
        "API: usuariosServices.atualizaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.atualizaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async apaga(req, res) {
    try {
      const { id } = req.params;
      await usuariosServices.apagaRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} deletado`,
      };
      moduloglobais.log(
        "API: usuariosServices.apagaRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.apagaRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }

  static async restaura(req, res) {
    try {
      const { id } = req.params;
      await usuariosServices.restauraRegistro(Number(id));
      let retorno = {
        sucesso: true,
        msg: `id ${id} restaurado`,
      };
      moduloglobais.log(
        "API: usuariosServices.restauraRegistro, ID: " + id,
        "info"
      );
      return res.status(200).json(retorno);
    } catch (error) {
      let retorno = {
        sucesso: false,
        msg: error.message,
      };
      moduloglobais.log(
        "API: usuariosServices.restauraRegistro ERROR: " + error.message,
        "error"
      );
      return res.status(500).json(retorno);
    }
  }
}

module.exports = UsuariosController;
