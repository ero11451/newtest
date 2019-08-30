const express = require('express');
const app = express();

import { ageValidation } from "./validatetion/userValidation"
import { Connection } from "./db/dbconnect"
import { portNumber}  from "./config/index"
import { postUser } from "./routers/postaUser";
import { getUser } from "./routers/getUser";
import { editUser } from "./routers/editUser";

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(ageValidation)
app.use("/get", getUser)
app.use("/post", postUser)
app.use("/edit", editUser)
Connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// app.use(router)
app.listen(portNumber)