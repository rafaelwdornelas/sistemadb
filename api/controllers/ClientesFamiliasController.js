/* eslint-disable indent */
const { ClientesFamiliasServices } = require("../services");
const clientesFamiliasServices = new ClientesFamiliasServices();
const sequelize = require("sequelize");
const { globais } = require("../modules");
const moduloglobais = new globais();

class ClientesFamiliasController {
    static async pegaApagados(req, res) {
        try {
            const dados = await clientesFamiliasServices.listaRegistrosApagado();
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : dados.length,
                rows: dados,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.listaRegistrosApagado",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.listaRegistrosApagado ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaApagado(req, res) {
        try {
            const { id } = req.params;
            const dados = await clientesFamiliasServices.consultaRegistroApagado(id);
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.consultaRegistroApagado, ID:" + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.consultaRegistroApagado ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaTodos(req, res) {
        try {
            const retorno = {
                sucesso: true,
                ...(await clientesFamiliasServices.pegaTodosOsRegistrosPaginacao({
                    offset: 0,
                    limit: 1000,
                })),
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.pegaTodosOsRegistrosPaginacao",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.pegaTodosOsRegistrosPaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async buscaRegistroCount(req, res) {
        try {
            const where = {
                NOME: {
                    [sequelize.Op.like]: `%${req.body.busca}%`,
                },
            };
            const retorno = {
                sucesso: true,
                ...(await clientesFamiliasServices.pegaTodosOsRegistrosWherePaginacao(
                    where, {
                        offset: req.body.inicio,
                        limit: req.body.limit,
                    }
                )),
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.pegaTodosOsRegistrosWherePaginacao Busca: " +
                req.body.busca,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pega(req, res) {
        try {
            const { id } = req.params;
            const dados = await clientesFamiliasServices.pegaUmRegistro({ id });
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.pegaUmRegistro ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.pegaUmRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async cria(req, res) {
        const novoRegistro = req.body;
        try {
            const dados = await clientesFamiliasServices.criaRegistro(novoRegistro);
            let retorno = {
                sucesso: true,
                count: 1,
                row: dados,
            };
            moduloglobais.log("API: clientesFamiliasServices.criaRegistro", "info");
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.criaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async atualiza(req, res) {
        try {
            const { id } = req.params;
            const novasInfos = req.body;
            await clientesFamiliasServices.atualizaRegistro(novasInfos, Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} atualizado`,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.atualizaRegistro ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.atualizaRegistro ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async apaga(req, res) {
        try {
            const { id } = req.params;
            await clientesFamiliasServices.apagaRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} deletado`,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.apagaRegistro ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.apagaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async restaura(req, res) {
        const { id } = req.params;
        try {
            await clientesFamiliasServices.restauraRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} restaurado`,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.restauraRegistro ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesFamiliasServices.restauraRegistro ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = ClientesFamiliasController;