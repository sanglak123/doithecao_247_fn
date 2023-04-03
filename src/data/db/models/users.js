"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.RefreshTokens, { foreignKey: "idUser" });
      this.belongsTo(models.Imgs, { foreignKey: "avatar" });
    }
  }
  Users.init(
    {
      username: DataTypes.STRING,
      display_name: DataTypes.STRING,
      full_name: DataTypes.STRING,
      adress: DataTypes.STRING,
      password: DataTypes.STRING,
      password2: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      avatar: DataTypes.INTEGER,
      surplus: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      wallet_number: DataTypes.STRING,
      partner_key: DataTypes.STRING,
      api_key: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
