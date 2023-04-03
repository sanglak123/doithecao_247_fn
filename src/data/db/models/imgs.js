"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Imgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Users, { foreignKey: "avatar" });

      this.hasOne(models.Cards, { foreignKey: "img" });
    }
  }
  Imgs.init(
    {
      file_name: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Imgs",
    }
  );
  return Imgs;
};
