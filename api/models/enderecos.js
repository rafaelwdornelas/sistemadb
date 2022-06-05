"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ENDERECOS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {}
    }
    ENDERECOS.init({
        END_CLI: {
            type: DataTypes.INTEGER,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo END_CLI deve ser um número e não " + typeof dado
                        );
                    }
                },
            },
        },
        END_TIPO: {
            type: DataTypes.INTEGER,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo END_TIPO deve ser um número e não " + typeof dado
                        );
                    }
                },
            },
        },
        END_CEP: {
            type: DataTypes.STRING(10),
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_NUMERO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length < 10 && dado.length > 0) {
                        throw new Error("O END_CEP deve ter 10 caracteres");
                    }
                },
            },
        },
        END_RUA: {
            type: DataTypes.STRING(80),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_NUMERO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length < 3 && dado.length > 0) {
                        throw new Error("O END_RUA deve ter no mínimo 10 caracteres");
                    } else if (dado.length > 80) {
                        throw new Error("O END_RUA deve ter no máximo 80 caracteres");
                    }
                },
            },
        },
        END_NUMERO: {
            type: DataTypes.INTEGER,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo END_NUMERO deve ser um número e não " + typeof dado
                        );
                    }
                },
            },
        },
        END_BAIRRO: {
            type: DataTypes.STRING(40),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_BAIRRO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length < 3 && dado.length > 0) {
                        throw new Error("O END_BAIRRO deve ter no mínimo 3 caracteres");
                    } else if (dado.length > 40) {
                        throw new Error("O END_BAIRRO deve ter no máximo 80 caracteres");
                    }
                },
            },
        },
        END_EST: {
            type: DataTypes.STRING(2),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_EST deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length < 3 && dado.length > 0) {
                        throw new Error("O END_EST deve ter no mínimo 3 caracteres");
                    }
                },
            },
        },
        END_MUNICIPIO: {
            type: DataTypes.STRING(60),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_MUNICIPIO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length < 3 && dado.length > 0) {
                        throw new Error(
                            "O END_MUNICIPIO deve ter no mínimo 3 caracteres"
                        );
                    } else if (dado.length > 60) {
                        throw new Error(
                            "O END_MUNICIPIO deve ter no máximo 60 caracteres"
                        );
                    }
                },
            },
        },
        END_COMP: {
            type: DataTypes.STRING(60),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_MUNICIPIO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length > 60) {
                        throw new Error("O END_COMP deve ter no máximo 60 caracteres");
                    }
                },
            },
        },
        END_CODMUN: {
            type: DataTypes.STRING(5),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_CODMUN deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length < 10 && dado.length > 0) {
                        throw new Error("O END_CODMUN deve ter 5 caracteres");
                    }
                },
            },
        },
        END_REFERENCIA: {
            type: DataTypes.STRING(255),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_REFERENCIA deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length > 255) {
                        throw new Error(
                            "O END_REFERENCIA deve ter no máximo 255 caracteres"
                        );
                    }
                },
            },
        },
        END_REGIAO: {
            type: DataTypes.STRING(3),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_REGIAO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length > 3) {
                        throw new Error("O END_REGIAO deve ter no máximo 3 caracteres");
                    }
                },
            },
        },
        END_CPAIS: {
            type: DataTypes.INTEGER,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo END_CPAIS deve ser um número e não " + typeof dado
                        );
                    }
                },
            },
        }, // Código do Pais no SPED
        END_NCPAIS: {
            type: DataTypes.STRING(60),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo END_REGIAO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length > 3) {
                        throw new Error("O END_REGIAO deve ter no máximo 60 caracteres");
                    }
                },
            },
        }, // Nome do País no SPED
    }, {
        sequelize,
        modelName: "ENDERECOS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return ENDERECOS;
};