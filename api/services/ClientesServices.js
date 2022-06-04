const Services = require("./Services");
const database = require("../models");

class ClientesServices extends Services {
    constructor() {
        super("CLIENTES");
    }

    async pegaTodosDados(id) {
        return database[this.nomeDoModelo].findAll({
            include: [
                { model: database["TELEFONES"], as: "TELEFONES" },
                { model: database["ENDERECOS"], as: "ENDERECOS" },
                { model: database["FORMAPAGS"] },
            ],
            where: { id: id },
        });
    }
}

module.exports = ClientesServices;