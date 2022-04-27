const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumenPlato: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pasos: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creadoEnBase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
