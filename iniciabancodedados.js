const { sequelizemagager } = require("./api/modules");
const sequelize = new sequelizemagager();

(async () => {
  //apaga o banco de dados
  let retorno = await sequelize.dropdatabase();
  console.log(retorno);
  //cria o banco de dados
  retorno = await sequelize.createdatabase();
  console.log(retorno);
  //cria as tabelas
  retorno = await sequelize.createtables();
  console.log(retorno);
  //seed incial
  retorno = await sequelize.seedinicial();
  console.log(retorno);
  console.log("Success Seed All");
})();
