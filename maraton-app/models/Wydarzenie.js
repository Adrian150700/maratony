const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Trasa = require("./Trasa");

class Wydarzenie extends Model {}

Wydarzenie.init(
  {
    id_wydarzenie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nazwa_wydarzenia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_wydarzenia: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    lokalizacja_wydarzenia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    typ_wydarzenia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Trasa_id_trasa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Trasa,
        key: "id_trasa",
      },
    },
  },
  {
    sequelize,
    modelName: "Wydarzenie",
    tableName: "Wydarzenie",
    timestamps: false,
  }
);

Wydarzenie.belongsTo(Trasa, { foreignKey: "Trasa_id_trasa" });

module.exports = Wydarzenie;
