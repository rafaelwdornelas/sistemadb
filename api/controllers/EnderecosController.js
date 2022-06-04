/* eslint-disable indent */
const { EnderecosServices } = require("../services");
const enderecosServices = new EnderecosServices();

class EnderecosController {
    static async pegaApagados(req, res) {
        try {
            const dados = await enderecosServices.listaRegistrosApagado();
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
            const dados = await enderecosServices.consultaRegistroApagado(id);
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
            const { id } = req.params;
            const where = {
                END_CLI: id,
            };
            const retorno = {
                sucesso: true,
                ...(await enderecosServices.pegaTodosOsRegistrosWherePaginacao(where, {
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
            const dados = await enderecosServices.pegaUmRegistro({ id });
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
            const dados = await enderecosServices.criaRegistro(novoRegistro);
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
            await enderecosServices.atualizaRegistro(novasInfos, Number(id));
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
            await enderecosServices.apagaRegistro(Number(id));
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
            await enderecosServices.restauraRegistro(Number(id));
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

module.exports = EnderecosController;