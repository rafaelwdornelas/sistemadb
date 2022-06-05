/* eslint-disable indent */
const chalk = require("chalk");
const fs = require("fs");

//Função para aguaradar em milisegundos
exports.sleep = function(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

//Função para exibir mensagens no console e salvar o log em arquivo
exports.log = function(texto, tipo) {
    let now = new Date();
    let hora = now.getHours() + "";
    let minuto = now.getMinutes() + "";
    let segundo = now.getSeconds() + "";
    let horario = `${hora.padStart(2, "0")}:${minuto.padStart(
    2,
    "0"
  )}:${segundo.padStart(2, "0")}`;

    SalvaLog(now, `${horario} - ${texto}`);

    switch (tipo) {
        case "info":
            console.log(chalk `{bold.blue [x]} ${horario} {blue ${texto}}`);
            break;
        case "error":
            console.log(chalk `{bold.red [x]} ${horario} {red ${texto}}`);
            break;
        case "success":
            console.log(chalk `{bold.green [x]} ${horario} {green ${texto}}`);
            break;
        case "warning":
            console.log(chalk `{bold.yellow [x]} ${horario} {yellow ${texto}}`);
            break;
        default:
            console.log(chalk `{bold.white [x]} ${horario} {white ${texto}}`);
            break;
    }
};

//Função para salvar logs de retorno em arquivo txt dentro da Pasta Retornos
function SalvaLog(caminho, texto) {
    try {
        var logger = fs.createWriteStream(`./logs/${caminho}.txt`, {
            flags: "a",
        });
        logger.write(texto + "\r\n");
        logger.end();
    } catch (err) {
        console.log(err);
    }
}