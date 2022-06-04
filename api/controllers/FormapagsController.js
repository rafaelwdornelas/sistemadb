/* eslint-disable indent */
const { FormapagsServices } = require("../services");
const formapagsServices = new FormapagsServices();

class EnderecosController {
    static async pegaTodos(req, res) {
        try {
            const retorno = {
                sucesso: true,
                ...(await formapagsServices.pegaTodosOsRegistrosPaginacao({
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
            const dados = await formapagsServices.pegaUmRegistro({ id });
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
            const dados = await formapagsServices.criaRegistro(novoRegistro);
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
            await formapagsServices.atualizaRegistro(novasInfos, Number(id));
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
            await formapagsServices.apagaRegistro(Number(id));
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
}

module.exports = EnderecosController;