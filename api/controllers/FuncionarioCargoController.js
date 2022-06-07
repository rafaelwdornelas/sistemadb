/* eslint-disable indent */
const { FuncionarioCargosServices } = require("../services");
const funcionariocargosServices = new FuncionarioCargosServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class FuncionarioCargoController {
    static async pegaApagados(req, res) {
        try {
            const dados = await funcionariocargosServices.listaRegistrosApagado();
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : dados.length,
                rows: dados,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.listaRegistrosApagado",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.listaRegistrosApagado ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaApagado(req, res) {
        try {
            const { id } = req.params;
            const dados = await funcionariocargosServices.consultaRegistroApagado(id);
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.consultaRegistroApagado, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.consultaRegistroApagado ERROR: " +
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
                ...(await funcionariocargosServices.pegaTodosOsRegistrosPaginacao({
                    offset: 0,
                    limit: 1000,
                })),
            };
            moduloglobais.log(
                "API: funcionariocargosServices.pegaTodosOsRegistrosPaginacao",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.pegaTodosOsRegistrosPaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pega(req, res) {
        try {
            const { id } = req.params;
            const dados = await funcionariocargosServices.pegaUmRegistro({ id });
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.pegaUmRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.pegaUmRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async cria(req, res) {
        const novoRegistro = req.body;
        try {
            const dados = await funcionariocargosServices.criaRegistro(novoRegistro);
            let retorno = {
                sucesso: true,
                count: 1,
                row: dados,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.pegaUmRegistro",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.criaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async atualiza(req, res) {
        try {
            const { id } = req.params;
            const novasInfos = req.body;
            await funcionariocargosServices.atualizaRegistro(novasInfos, Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} atualizado`,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.atualizaRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.atualizaRegistro ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async apaga(req, res) {
        try {
            const { id } = req.params;
            await funcionariocargosServices.apagaRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} deletado`,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.apagaRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.apagaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async restaura(req, res) {
        try {
            const { id } = req.params;
            await funcionariocargosServices.restauraRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} restaurado`,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.restauraRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: funcionariocargosServices.restauraRegistro ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = FuncionarioCargoController;