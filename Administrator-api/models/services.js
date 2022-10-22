const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Service = sequelize.define('Servicio', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  idConductor: {
    type: Sequelize.INTEGER,
  },
  idCliente: {
    type: Sequelize.INTEGER,
  },
  idZona: {
    type: Sequelize.INTEGER,
  },
  idDescuento: {
    type: Sequelize.INTEGER,
  },
  idEstado: {
    type: Sequelize.INTEGER,
  },
  precioFinal: {
    type: Sequelize.DOUBLE,
  }

});

module.exports = Service;
