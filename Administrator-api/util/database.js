const Sequelize = require('sequelize');

const sequelize = new Sequelize('chuber-admin', 'sa', '1234',
{
    host: 'localhost',
    dialect : 'mssql',
    port: '51284',
});

module.exports = sequelize;
