// const Sequelize = require("sequelize")
import { Connection } from "./dbconnect"
// import { Model } from "sequelize";
const Sequelize = require("sequelize")
// export class userModel extends Model {}

// userModel.se({
//         firstName: Sequelize.STRING,
//         lastName: Sequelize.STRING,
//         phoneNumber: Sequelize.STRING,
//         Age: Sequelize.STRING,
//     }, { sequelize: Connection, modelName: "user" });
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
userModel.create({ firstName: 'John Doe',phoneNumber:5994,Age:95, lastName: 'senior engineer', }).then(
  console.log(`new user have being created`)
  
)
module.exports = userModel

