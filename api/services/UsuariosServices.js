const Services = require("./Services");
const database = require("../models");
class FuncionariosServices extends Services {
    constructor() {
        super("USUARIOS");
    }
    async getUsuario(username, senha) {
        console.log("username: " + username, "senha: " + senha);
        try {
            return await database[this.nomeDoModelo].findAll({
                include: [{ model: database["FUNCIONARIOS"], as: "FUNCIONARIO" }],
                where: {
                    USERNAME: username,
                    SENHA: senha,
                },
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = FuncionariosServices;