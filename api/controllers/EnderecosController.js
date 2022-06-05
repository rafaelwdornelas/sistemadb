/* eslint-disable indent */
const { EnderecosServices } = require("../services");
const enderecosServices = new EnderecosServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class EnderecosController {
    static async pegaApagados(req, res) {
        try {
            const dados = await enderecosServices.listaRegistrosApagado();
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : dados.length,
                rows: dados,
            };
            moduloglobais.log("API: enderecosServices.listaRegistrosApagado", "info");
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: enderecosServices.listaRegistrosApagado ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaApagado(req, res) {
        try {
            const { id } = req.params;
            const dados = await enderecosServices.consultaRegistroApagado(id);
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: enderecosServices.consultaRegistroApagado, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: enderecosServices.consultaRegistroApagado ERROR: " +
                error.message,
                "error"
            );
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
            moduloglobais.log(
                "API: enderecosServices.pegaTodosOsRegistrosWherePaginacao, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: enderecosServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pega(req, res) {
        try {
            const { id } = req.params;
            const dados = await enderecosServices.pegaUmRegistro({ id });
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: enderecosServices.pegaUmRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: enderecosServices.pegaUmRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async cria(req, res) {
        try {
            const novoRegistro = req.body;
            const dados = await enderecosServices.criaRegistro(novoRegistro);
            let retorno = {
                sucesso: true,
                count: 1,
                row: dados,
            };
            moduloglobais.log("API: enderecosServices.criaRegistro", "info");
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: enderecosServices.criaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async atualiza(req, res) {
        try {
            const { id } = req.params;
            const novasInfos = req.body;
            await enderecosServices.atualizaRegistro(novasInfos, Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} atualizado`,
            };
            moduloglobais.log(
                "API: enderecosServices.atualizaRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: enderecosServices.atualizaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async apaga(req, res) {
        try {
            const { id } = req.params;
            await enderecosServices.apagaRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} deletado`,
            };
            moduloglobais.log(
                "API: enderecosServices.apagaRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: enderecosServices.apagaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async restaura(req, res) {
        try {
            const { id } = req.params;
            await enderecosServices.restauraRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} restaurado`,
            };
            moduloglobais.log(
                "API: enderecosServices.restauraRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: enderecosServices.restauraRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = EnderecosController;