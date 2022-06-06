/* eslint-disable indent */
const { LojasServices } = require("../services");
const lojasServices = new LojasServices();
const { globais } = require("../modules");
const moduloglobais = new globais();

class LojasController {
    static async pegaApagados(req, res) {
        try {
            const dados = await lojasServices.listaRegistrosApagado();
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : dados.length,
                rows: dados,
            };
            moduloglobais.log("API: lojasServices.listaRegistrosApagado", "info");
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.listaRegistrosApagado ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaApagado(req, res) {
        try {
            const { id } = req.params;
            const dados = await lojasServices.consultaRegistroApagado(id);
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log(
                "API: lojasServices.consultaRegistroApagado, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.consultaRegistroApagado ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pegaTodos(req, res) {
        try {
            const retorno = {
                sucesso: true,
                ...(await lojasServices.pegaTodosOsRegistrosPaginacao({
                    offset: req.body.inicio,
                    limit: req.body.limit,
                })),
            };
            moduloglobais.log(
                "API: lojasServices.pegaTodosOsRegistrosPaginacao",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.pegaTodosOsRegistrosPaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async pega(req, res) {
        try {
            const { id } = req.params;
            const dados = await lojasServices.pegaUmRegistro({ id });
            let retorno = {
                sucesso: true,
                count: dados == null ? 0 : 1,
                row: dados,
            };
            moduloglobais.log("API: lojasServices.pegaUmRegistro, ID: " + id, "info");
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.pegaUmRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async cria(req, res) {
        try {
            const novoRegistro = req.body;
            const dados = await lojasServices.criaRegistro(novoRegistro);
            let retorno = {
                sucesso: true,
                count: 1,
                row: dados,
            };
            moduloglobais.log("API: lojasServices.criaRegistro", "info");
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.criaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async atualiza(req, res) {
        try {
            const { id } = req.params;
            const novasInfos = req.body;
            await lojasServices.atualizaRegistro(novasInfos, Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} atualizado`,
            };
            moduloglobais.log(
                "API: lojasServices.atualizaRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.atualizaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async apaga(req, res) {
        try {
            const { id } = req.params;
            if (id == 1) {
                let retorno = {
                    sucesso: false,
                    msg: "Não é possível apagar o registro padrão",
                };
                moduloglobais.log(
                    "API: lojasServices.apagaRegistro, ID: " + id,
                    "error"
                );
                return res.status(500).json(retorno);
            } else {
                await lojasServices.apagaRegistro(Number(id));
                let retorno = {
                    sucesso: true,
                    msg: `id ${id} deletado`,
                };
                moduloglobais.log(
                    "API: lojasServices.apagaRegistro, ID: " + id,
                    "info"
                );
                return res.status(200).json(retorno);
            }
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.apagaRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async restaura(req, res) {
        try {
            const { id } = req.params;
            await lojasServices.restauraRegistro(Number(id));
            let retorno = {
                sucesso: true,
                msg: `id ${id} restaurado`,
            };
            moduloglobais.log(
                "API: lojasServices.restauraRegistro, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.restauraRegistro ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async adicionalicenca(req, res) {
        try {
            const { id, dias } = req.params;
            const status = await lojasServices.adicionalicenca(
                Number(id),
                Number(dias)
            );
            if (status == true) {
                let retorno = {
                    sucesso: true,
                    msg: `Loja ${id} adicionado ${dias} dias`,
                };
                moduloglobais.log(
                    "API: lojasServices.adicionalicenca, ID: " + id,
                    "info"
                );
                return res.status(200).json(retorno);
            } else {
                let retorno = {
                    sucesso: false,
                    msg: `Loja ${id} não adicionado ${dias} dias`,
                };
                moduloglobais.log(
                    "API: lojasServices.adicionalicenca, ID: " + id,
                    "error"
                );
                return res.status(500).json(retorno);
            }
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.adicionalicenca ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async verificalicenca(req, res) {
        try {
            const { id } = req.params;
            const dados = await lojasServices.verificalicenca(Number(id));
            let retorno = {
                sucesso: true,
                row: dados,
            };
            moduloglobais.log(
                "API: lojasServices.verificalicenca, ID: " + id,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: lojasServices.verificalicenca ERROR: " + error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = LojasController;