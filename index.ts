

const express = require('express');
const app = express();

import { Connection } from "./db/dbconnect"
import { portNumber}  from "./config/index"
import { loginUser } from "./login/login";
import { regUser } from "./login/regUser";
import { userValidation, tokenValidation } from "./validatetion/userValidation";
import { home } from "./login/home";

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/login",userValidation, loginUser)
app.use("/register",userValidation,regUser)
app.use("/home", tokenValidation, home)
Connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// app.use(router)
app.listen(portNumber || 2000)