const shell = require("shelljs");

class sequelizemanager {
    //Função para apagar o banco de dados
    async dropdatabase() {
        var child = shell.exec("yarn sequelize db:drop --debug");
        if (child.code !== 0) {
            throw new Error(child.stderr);
        } else {
            return child.stdout;
        }
    }

    //Função para criar o banco de dados
    async createdatabase() {
        var child = shell.exec("yarn sequelize db:create --debug");
        if (child.code !== 0) {
            throw new Error(child.stderr);
        } else {
            return child.stdout;
        }
    }

    //Função para criar o banco de dados
    async createtables() {
        var child = shell.exec("yarn sequelize db:migrate --debug");
        if (child.code !== 0) {
            throw new Error(child.stderr);
        } else {
            return child.stdout;
        }
    }

    //Função para criar o banco de dados
    async seedinicial() {
        var child = shell.exec("yarn sequelize db:seed:all --debug");
        if (child.code !== 0) {
            throw new Error(child.stderr);
        } else {
            return child.stdout;
        }
    }
}

module.exports = sequelizemanager;