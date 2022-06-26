"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PEDCOMPRA_CABS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  PEDCOMPRA_CABS.init(
    {
      LOJA: DataTypes.INTEGER,
      FORNECEDOR: DataTypes.INTEGER,
      SOLICITANTE: DataTypes.INTEGER,
      APROVADOR: DataTypes.INTEGER,
      STATUS: DataTypes.INTEGER,
      DATAAPROVADO: DataTypes.STRING(8),
      VALORMERCADORIAS: DataTypes.FLOAT,
      VALORTAXAS: DataTypes.FLOAT,
      VALORTOTAL: DataTypes.FLOAT,
      OBS: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "PEDCOMPRA_CAB",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      deletedAt: "DELETADO_EM",
      freezeTableName: true,
      paranoid: true,
    }
  );
  return PEDCOMPRA_CABS;
};
