/* eslint-disable indent */
const { ClientesServices } = require("../services");
const clientesServices = new ClientesServices();
const sequelize = require("sequelize");
const { globais } = require("../modules");
const moduloglobais = new globais();

class ClientesController {
    static async pegaTodosDados(req, res) {
        try {
            const { id } = req.params;
            const retorno = await clientesServices.pegaTodosDados(id);
            moduloglobais.log(
                "API: clientesServices.pegaTodosDados, ID:" + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.pegaTodosDados ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
    static async pegaAtivos(req, res) {
        try {
            const where = {
                CLI_ATIVO: "S",
            };
            const retorno = {
                sucesso: true,
                ...(await clientesServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: req.body.inicio,
                    limit: req.body.limit,
                })),
            };
            moduloglobais.log(
                "API: clientesServices.pegaTodosOsRegistrosWherePaginacao",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaApagados(req, res) {
        try {
            let dados = await clientesServices.listaRegistrosApagado();
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : dados.length,
                rows: dados,
            };
            moduloglobais.log("API: clientesServices.listaRegistrosApagado", "info");
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.listaRegistrosApagado ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaApagado(req, res) {
        try {
            const { id } = req.params;
            const dados = await clientesServices.consultaRegistroApagado(id);
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: clientesServices.consultaRegistroApagado, ID:" + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.consultaRegistroApagado ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaTodos(req, res) {
        try {
            const retorno = {
                sucesso: true,
                ...(await clientesServices.pegaTodosOsRegistrosPaginacao({
                    offset: req.body.inicio,
                    limit: req.body.limit,
                })),
            };
            moduloglobais.log(
                "API: clientesServices.pegaTodosOsRegistrosPaginacao",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.pegaTodosOsRegistrosPaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async buscaRegistroCount(req, res) {
        const where = {
            [sequelize.Op.or]: [{
                    CLI_NOME: {
                        [sequelize.Op.like]: `%${req.body.busca}%`,
                    },
                },
                {
                    CLI_NOME_FANTASIA: {
                        [sequelize.Op.like]: `%${req.body.busca}%`,
                    },
                },
                {
                    CLI_CPF_CNPJ: {
                        [sequelize.Op.like]: `%${req.body.busca}%`,
                    },
                },
            ],
        };
        try {
            const retorno = {
                sucesso: true,
                ...(await clientesServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: req.body.inicio,
                    limit: req.body.limit,
                })),
            };
            moduloglobais.log(
                "API: clientesServices.pegaTodosOsRegistrosWherePaginacao, Busca: " +
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
                "API: clientesServices.pegaTodosOsRegistrosWherePaginacao, Busca ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pega(req, res) {
        try {
            const { id } = req.params;
            const dados = await clientesServices.pegaUmRegistro({ id });
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: clientesServices.pegaUmRegistro, ID:" + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.pegaUmRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async cria(req, res) {
        const novoRegistro = req.body;
        try {
            const dados = await clientesServices.criaRegistro(novoRegistro);
            let retorno = {
                sucesso: true,
                count: 1,
                row: dados,
            };
            moduloglobais.log("API: clientesServices.criaRegistro", "info");
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.criaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async atualiza(req, res) {
        try {
            const { id } = req.params;
            const novasInfos = req.body;
            await clientesServices.atualizaRegistro(novasInfos, Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} atualizado`,
            };
            moduloglobais.log(
                "API: clientesServices.pegaUmRegistro, ID:" + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.atualizaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async apaga(req, res) {
        try {
            const { id } = req.params;
            await clientesServices.apagaRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} deletado`,
            };
            moduloglobais.log(
                "API: clientesServices.apagaRegistro, ID:" + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.apagaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async restaura(req, res) {
        try {
            const { id } = req.params;
            await clientesServices.restauraRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} restaurado`,
            };
            moduloglobais.log(
                "API: clientesServices.restauraRegistro, ID:" + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: clientesServices.restauraRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = ClientesController;