/* eslint-disable indent */
const { TelefonesServices } = require("../services");
const telefonesServices = new TelefonesServices();

class TelefonesController {
    static async pegaApagados(req, res) {
        try {
            const dados = await telefonesServices.listaRegistrosApagado();
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
            const dados = await telefonesServices.consultaRegistroApagado(id);
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
                TEL_CLI: id,
            };
            const retorno = {
                sucesso: true,
                ...(await telefonesServices.pegaTodosOsRegistrosWherePaginacao(where, {
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
            const dados = await telefonesServices.pegaUmRegistro({ id });
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
            const dados = await telefonesServices.criaRegistro(novoRegistro);
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
            await telefonesServices.atualizaRegistro(novasInfos, Number(id));
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
            await telefonesServices.apagaRegistro(Number(id));
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
            await telefonesServices.restauraRegistro(Number(id));
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

module.exports = TelefonesController;