const Sequelize = require('sequelize');
// import { host,dbname,username, password }  from "../config/index"

export const Connection = new Sequelize('testdb', 'muyi', 'fedgac11451', {
  host: "localhost",
  dialect: 'mysql'
}) 
