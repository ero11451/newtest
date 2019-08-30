const Sequelize = require('sequelize');

export const Connection = new Sequelize("testdb", "muyi", "fedgac11451", {
  host: "localhost",
  dialect: 'mysql'
}) 
