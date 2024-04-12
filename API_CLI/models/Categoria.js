'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.hasMany(models.Producto,{
        foreignKeys: 'idCategoria'
      })
      // define association here
    }
  };
  Categoria.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};