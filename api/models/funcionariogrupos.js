'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FUNCIONARIOGRUPOS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FUNCIONARIOGRUPOS.init({
    FUNGR_NOME: DataTypes.STRING,
    FUNGR_CENTRO_CUSTOS: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FUNCIONARIOGRUPOS',
  });
  return FUNCIONARIOGRUPOS;
};