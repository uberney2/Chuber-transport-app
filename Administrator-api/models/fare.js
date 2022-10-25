const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Fare = sequelize.define("Tarifa", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  zona: {
    type: Sequelize.STRING,
  },
  tarifa: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = Fare;
