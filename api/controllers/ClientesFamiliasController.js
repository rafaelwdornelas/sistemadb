/* eslint-disable indent */
const { ClientesFamiliasServices } = require("../services");
const clientesFamiliasServices = new ClientesFamiliasServices();
const sequelize = require("sequelize");

class ClientesFamiliasController {
    static async pegaApagados(req, res) {
        try {
            const dados = await clientesFamiliasServices.listaRegistrosApagado();
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : dados.length,
                rows: dados,
            };
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            return res.status(500).json(retorno);
        }
    }

    static async pegaApagado(req, res) {
        const { id } = req.params;
        try {
            const dados = await clientesFamiliasServices.consultaRegistroApagado(id);
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
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
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            return res.status(500).json(retorno);
        }
    }

    static async buscaRegistroCount(req, res) {
        const where = {
            NOME: {
                [sequelize.Op.like]: `%${req.body.busca}%`,
            },
        };
        try {
            const retorno = {
                sucesso: true,
                ...(await clientesFamiliasServices.pegaTodosOsRegistrosWherePaginacao(
                    where, {
                        offset: req.body.inicio,
                        limit: req.body.limit,
                    }
                )),
            };
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            return res.status(500).json(retorno);
        }
    }

    static async pega(req, res) {
        const { id } = req.params;
        try {
            const dados = await clientesFamiliasServices.pegaUmRegistro({ id });
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
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
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            return res.status(500).json(retorno);
        }
    }

    static async atualiza(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await clientesFamiliasServices.atualizaRegistro(novasInfos, Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} atualizado`,
            };
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            return res.status(500).json(retorno);
        }
    }

    static async apaga(req, res) {
        const { id } = req.params;
        try {
            await clientesFamiliasServices.apagaRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} deletado`,
            };
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
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
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            return res.status(500).json(retorno);
        }
    }
}

module.exports = ClientesFamiliasController;