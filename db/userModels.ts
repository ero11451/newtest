import { Connection } from "./dbconnect"
const Sequelize = require("sequelize")
const userModel = Connection.define('userModel', {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        phoneNumber: Sequelize.INTEGER,
        Age: Sequelize.INTEGER ,
})
userModel.sync({ alter: true }).then(() => {
  console.log("user table created");
}).catch((err)=>{
  console.log(`there is error:${err}`);
})
module.exports = userModel

