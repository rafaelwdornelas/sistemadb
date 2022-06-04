/* eslint-disable indent */
const { ClientesServices } = require("../services");
const clientesServices = new ClientesServices();
const sequelize = require("sequelize");

class ClientesController {
    static async pegaTodosDados(req, res) {
        try {
            const { id } = req.params;
            const retorno = await clientesServices.pegaTodosDados(id);

            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
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
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
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
            const dados = await clientesServices.consultaRegistroApagado(id);
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
                ...(await clientesServices.pegaTodosOsRegistrosPaginacao({
                    offset: req.body.inicio,
                    limit: req.body.limit,
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
            const dados = await clientesServices.pegaUmRegistro({ id });
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
            const dados = await clientesServices.criaRegistro(novoRegistro);
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
            await clientesServices.atualizaRegistro(novasInfos, Number(id));
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
            await clientesServices.apagaRegistro(Number(id));
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
            await clientesServices.restauraRegistro(Number(id));
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

module.exports = ClientesController;