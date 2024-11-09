const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize ("chatapp2", "root", "akash@123", {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
