'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FUNCIONARIOCARGO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FUNCIONARIOCARGO.init({
    FUNCG_NOME: DataTypes.STRING,
    FUNCG_GRUPO: DataTypes.INTEGER,
    FUNCG_SALARIO: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'FUNCIONARIOCARGO',
  });
  return FUNCIONARIOCARGO;
};